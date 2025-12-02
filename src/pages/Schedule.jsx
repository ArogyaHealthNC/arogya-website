/**
 * Schedule Page - Arogya Wellness Website
 *
 * Purpose: Display weekly session calendar with join buttons and calendar export options
 * Meta: Session Schedule | Arogya Wellness Program
 * Description: View the full Arogya session schedule. 3 live exercise sessions and
 *              1 lifestyle discussion per week. Join from anywhere — all fitness levels welcome.
 */

import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Globe,
  Download,
  Calendar,
  Bell,
  Video,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
} from 'lucide-react';
import SEO from '../components/SEO';
import './Schedule.css';

// Timezone options
const timezones = [
  { value: 'America/New_York', label: 'Eastern Time (ET)', offset: -5 },
  { value: 'America/Chicago', label: 'Central Time (CT)', offset: -6 },
  { value: 'America/Denver', label: 'Mountain Time (MT)', offset: -7 },
  { value: 'America/Los_Angeles', label: 'Pacific Time (PT)', offset: -8 },
];

// Helper to format date
function formatDate(date) {
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

// Helper to get week start (Monday)
function getWeekStart(date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(d.setDate(diff));
}

// Helper to format time based on timezone offset difference
function adjustTime(baseTime, offsetDiff) {
  const [time, period] = baseTime.split(' ');
  let [hours, minutes] = time.split(':').map(Number);

  // Convert to 24-hour
  if (period === 'PM' && hours !== 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;

  // Adjust for timezone
  hours += offsetDiff;

  // Handle day wrap
  if (hours < 0) hours += 24;
  if (hours >= 24) hours -= 24;

  // Convert back to 12-hour
  const newPeriod = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;

  return `${displayHours}:${minutes.toString().padStart(2, '0')} ${newPeriod}`;
}

// Generate ICS calendar data
function generateICS(session, date) {
  const sessionDate = new Date(date);

  // Parse the time
  const [time, period] = session.time.split(' ');
  let [hours, minutes] = time.split(':').map(Number);
  if (period === 'PM' && hours !== 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;

  sessionDate.setHours(hours, minutes, 0, 0);

  const endDate = new Date(sessionDate);
  endDate.setMinutes(endDate.getMinutes() + parseInt(session.duration));

  const formatDateForICS = (d) => {
    return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Arogya Wellness//Session Calendar//EN
BEGIN:VEVENT
DTSTART:${formatDateForICS(sessionDate)}
DTEND:${formatDateForICS(endDate)}
SUMMARY:${session.title}${session.topic ? ` - ${session.topic}` : ''}
DESCRIPTION:${session.description}\\n\\nJoin via Zoom: ${session.zoomLink}
LOCATION:Online (Zoom)
END:VEVENT
END:VCALENDAR`;

  return icsContent;
}

function Schedule() {
  const navigate = useNavigate();
  const [currentWeekStart, setCurrentWeekStart] = useState(() => getWeekStart(new Date()));
  const [selectedTimezone, setSelectedTimezone] = useState('America/New_York');

  // Base schedule template (times in ET)
  const baseScheduleTemplate = useMemo(() => ({
    Monday: [
      {
        type: 'exercise',
        title: 'Exercise Session',
        baseTime: '9:00 AM',
        duration: '45 minutes',
        description: 'Full-body guided movement session',
        zoomLink: 'https://zoom.us/j/example',
      },
    ],
    Tuesday: [
      {
        type: 'lifestyle',
        title: 'Lifestyle Discussion',
        baseTime: '7:00 PM',
        duration: '30 minutes',
        description: "This week's wellness focus",
        topic: 'Nutrition & Healthy Eating',
        zoomLink: 'https://zoom.us/j/example',
      },
    ],
    Wednesday: [
      {
        type: 'exercise',
        title: 'Exercise Session',
        baseTime: '9:00 AM',
        duration: '45 minutes',
        description: 'Strength and mobility workout',
        zoomLink: 'https://zoom.us/j/example',
      },
    ],
    Thursday: [],
    Friday: [
      {
        type: 'exercise',
        title: 'Exercise Session',
        baseTime: '9:00 AM',
        duration: '45 minutes',
        description: 'Movement and flexibility focus',
        zoomLink: 'https://zoom.us/j/example',
      },
    ],
    Saturday: [],
    Sunday: [],
  }), []);

  // Generate weekly schedule based on current week
  const weeklySchedule = useMemo(() => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const selectedTz = timezones.find((tz) => tz.value === selectedTimezone);
    const baseTz = timezones.find((tz) => tz.value === 'America/New_York');
    const offsetDiff = baseTz.offset - selectedTz.offset;

    return days.map((dayName, index) => {
      const date = new Date(currentWeekStart);
      date.setDate(date.getDate() + index);

      const sessions = (baseScheduleTemplate[dayName] || []).map((session) => ({
        ...session,
        time: adjustTime(session.baseTime, offsetDiff),
      }));

      return {
        day: dayName,
        date: formatDate(date),
        fullDate: date,
        sessions,
      };
    });
  }, [currentWeekStart, selectedTimezone, baseScheduleTemplate]);

  const navigateWeek = (direction) => {
    const newWeekStart = new Date(currentWeekStart);
    newWeekStart.setDate(newWeekStart.getDate() + direction * 7);
    setCurrentWeekStart(newWeekStart);
  };

  const goToCurrentWeek = () => {
    setCurrentWeekStart(getWeekStart(new Date()));
  };

  const isCurrentWeek = useMemo(() => {
    const today = getWeekStart(new Date());
    return currentWeekStart.getTime() === today.getTime();
  }, [currentWeekStart]);

  const weekRangeLabel = useMemo(() => {
    const start = new Date(currentWeekStart);
    const end = new Date(currentWeekStart);
    end.setDate(end.getDate() + 6);

    const startMonth = start.toLocaleDateString('en-US', { month: 'short' });
    const endMonth = end.toLocaleDateString('en-US', { month: 'short' });

    if (startMonth === endMonth) {
      return `${startMonth} ${start.getDate()} - ${end.getDate()}, ${start.getFullYear()}`;
    }
    return `${startMonth} ${start.getDate()} - ${endMonth} ${end.getDate()}, ${end.getFullYear()}`;
  }, [currentWeekStart]);

  const handleAddToCalendar = (session, day) => {
    const icsContent = generateICS(session, day.fullDate);
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `arogya-${session.type}-${day.day.toLowerCase()}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadSchedule = () => {
    // Generate a multi-event ICS file
    let events = '';

    weeklySchedule.forEach((day) => {
      day.sessions.forEach((session) => {
        const sessionDate = new Date(day.fullDate);
        const [time, period] = session.time.split(' ');
        let [hours, minutes] = time.split(':').map(Number);
        if (period === 'PM' && hours !== 12) hours += 12;
        if (period === 'AM' && hours === 12) hours = 0;

        sessionDate.setHours(hours, minutes, 0, 0);
        const endDate = new Date(sessionDate);
        endDate.setMinutes(endDate.getMinutes() + parseInt(session.duration));

        const formatDateForICS = (d) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

        events += `BEGIN:VEVENT
DTSTART:${formatDateForICS(sessionDate)}
DTEND:${formatDateForICS(endDate)}
SUMMARY:${session.title}${session.topic ? ` - ${session.topic}` : ''}
DESCRIPTION:${session.description}
LOCATION:Online (Zoom)
END:VEVENT
`;
      });
    });

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Arogya Wellness//Session Calendar//EN
${events}END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `arogya-schedule-${weekRangeLabel.replace(/[^a-zA-Z0-9]/g, '-')}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleJoinClick = () => {
    navigate('/join');
  };

  return (
    <div className="schedule-page">
      <SEO
        title="Session Schedule | Arogya Wellness Program"
        description="View the full Arogya session schedule. 3 live exercise sessions and 1 lifestyle discussion per week. Join from anywhere — all fitness levels welcome."
      />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1>Session Schedule</h1>
          <p className="intro-text">
            View all upcoming sessions and join live. Select your timezone below to see sessions in your local time.
            Can't make a session? Recordings are always available.
          </p>
        </div>
      </section>

      {/* Schedule Actions */}
      <section className="schedule-actions">
        <div className="container">
          <div className="actions-bar">
            <div className="timezone-selector">
              <Clock size={20} />
              <select
                value={selectedTimezone}
                onChange={(e) => setSelectedTimezone(e.target.value)}
                className="timezone-select"
              >
                {timezones.map((tz) => (
                  <option key={tz.value} value={tz.value}>
                    {tz.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="action-buttons">
              <button className="btn-secondary" onClick={handleDownloadSchedule}>
                <Download size={18} />
                Download Week (.ics)
              </button>
            </div>
          </div>

          {/* Legend */}
          <div className="schedule-legend">
            <div className="legend-item">
              <span className="legend-dot exercise"></span>
              <span>Exercise Session (45 min)</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot lifestyle"></span>
              <span>Lifestyle Discussion (30 min)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Week Navigation */}
      <section className="week-navigation">
        <div className="container">
          <div className="week-nav-bar">
            <button
              className="week-nav-btn"
              onClick={() => navigateWeek(-1)}
              aria-label="Previous week"
            >
              <ChevronLeft size={24} />
              <span className="nav-label">Previous</span>
            </button>

            <div className="week-label">
              <h2>{weekRangeLabel}</h2>
              {!isCurrentWeek && (
                <button className="today-btn" onClick={goToCurrentWeek}>
                  Today
                </button>
              )}
            </div>

            <button
              className="week-nav-btn"
              onClick={() => navigateWeek(1)}
              aria-label="Next week"
            >
              <span className="nav-label">Next</span>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="weekly-schedule">
        <div className="container">
          <div className="schedule-grid">
            {weeklySchedule.map((day, index) => {
              const isToday =
                new Date().toDateString() === day.fullDate.toDateString();

              return (
                <div
                  key={index}
                  className={`day-card ${day.sessions.length === 0 ? 'no-sessions' : ''} ${isToday ? 'is-today' : ''}`}
                >
                  <div className="day-header">
                    <div className="day-header-content">
                      <h3>{day.day}</h3>
                      {isToday && <span className="today-badge">Today</span>}
                    </div>
                    <p className="date">{day.date}</p>
                  </div>

                  {day.sessions.length > 0 ? (
                    <div className="sessions-list">
                      {day.sessions.map((session, sessionIndex) => (
                        <div key={sessionIndex} className={`session-card ${session.type}`}>
                          <div className="session-type-indicator">
                            <span className={`type-dot ${session.type}`}></span>
                            <span className="type-label">
                              {session.type === 'exercise'
                                ? 'Exercise Session'
                                : 'Lifestyle Discussion'}
                            </span>
                          </div>

                          <div className="session-details">
                            <div className="session-time">
                              <span className="time">{session.time}</span>
                              <span className="duration">{session.duration}</span>
                            </div>

                            <p className="session-description">{session.description}</p>

                            {session.topic && (
                              <p className="session-topic">
                                <strong>Topic:</strong> {session.topic}
                              </p>
                            )}
                          </div>

                          <div className="session-actions">
                            <button
                              className="btn-join"
                              onClick={() => window.open(session.zoomLink, '_blank')}
                            >
                              Join Session
                            </button>
                            <button
                              className="btn-calendar"
                              onClick={() => handleAddToCalendar(session, day)}
                              title="Add to calendar"
                            >
                              <Calendar size={20} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="no-sessions-message">
                      <p>No sessions scheduled</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="info-section">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">
                <Bell size={28} />
              </div>
              <h3>Session Reminders</h3>
              <p>
                You'll receive email reminders 1 hour before each session with the Zoom link.
              </p>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <Video size={28} />
              </div>
              <h3>Recordings Available</h3>
              <p>
                Missed a session? Don't worry! All recordings are available in your member
                dashboard.
              </p>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <MessageCircle size={28} />
              </div>
              <h3>Questions?</h3>
              <p>Need help accessing a session? Contact us at hello@arogya.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Not a Member Yet?</h2>
            <p>Join Arogya and get access to all live sessions and recordings</p>
            <button className="cta-button" onClick={handleJoinClick}>
              Join the Program
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Schedule;
