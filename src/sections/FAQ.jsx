import React from 'react';
import { useNavigate } from 'react-router-dom';
import Accordion from '../components/Accordion';
import './FAQ.css';

const FAQ = () => {
  const navigate = useNavigate();

  const faqItems = [
    {
      question: 'What fitness level is required?',
      answer: 'None! Our program is designed for all fitness levels. Whether you\'re just starting out or already active, our guided sessions meet you where you are. Every exercise includes modifications so you can move at your own pace.'
    },
    {
      question: 'What equipment do I need?',
      answer: 'Very little. Most sessions require just a yoga mat and comfortable clothing. Occasionally, we\'ll use light resistance bands or household items like water bottles. We\'ll always let you know in advance if anything specific is needed.'
    },
    {
      question: 'How long are the sessions?',
      answer: 'Exercise sessions are 45 minutes, and lifestyle discussions are 30 minutes. We respect your time — sessions start and end on schedule, with no fluff or filler.'
    },
    {
      question: 'What if I miss a session?',
      answer: 'Life happens! While we encourage attending live for the community experience and accountability, session recordings are available if you need to catch up. You\'ll never fall behind.'
    },
    {
      question: 'How do I join the live sessions?',
      answer: 'After you sign up, you\'ll receive a welcome email with Zoom links for all sessions. Just click the link at session time, and you\'re in. It\'s that simple.'
    },
    {
      question: 'Is this program right for me?',
      answer: 'If you\'re an adult looking to improve your energy, strength, and overall well-being through guided movement and practical wellness education — and you value community support — Arogya was designed for you. No gym experience required. No perfect diet needed. Just a willingness to show up.'
    }
  ];

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section className="faq">
      <div className="container">
        <h2 className="section-heading">Common Questions</h2>

        <Accordion items={faqItems} className="faq-accordion" />

        <div className="faq-cta">
          <button
            className="link-button"
            onClick={handleContactClick}
          >
            Still have questions? Contact us →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
