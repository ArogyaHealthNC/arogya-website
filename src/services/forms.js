/**
 * Form Submission Service
 *
 * This module provides an abstraction layer for form submissions.
 * Currently uses mock implementations that can be replaced with
 * Supabase + Resend integrations in the future.
 */

/**
 * Submit registration form data
 * @param {Object} data - Form data containing fullName, email, phone, referralSource
 * @returns {Promise<Object>} - Response with success status
 */
export const submitRegistrationForm = async (data) => {
  // TODO: Replace with Supabase integration
  // Example future implementation:
  // const { error } = await supabase.from('registrations').insert([data]);
  // if (error) throw error;
  // await sendWelcomeEmail(data.email, data.fullName);

  console.log('Registration form submitted:', data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate successful submission
      resolve({
        success: true,
        message: 'Registration successful! Check your email for next steps.'
      });
    }, 1000);
  });
};

/**
 * Submit email capture/newsletter form data
 * @param {Object} data - Form data containing firstName, email
 * @returns {Promise<Object>} - Response with success status
 */
export const submitEmailCapture = async (data) => {
  // TODO: Replace with Supabase + Resend integration
  // Example future implementation:
  // const { error } = await supabase.from('email_subscribers').insert([data]);
  // if (error) throw error;
  // await addToEmailList(data.email, data.firstName);

  console.log('Email capture form submitted:', data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "You're in! Check your inbox for your first wellness tip."
      });
    }, 1000);
  });
};

/**
 * Submit contact form data
 * @param {Object} data - Form data containing name, email, subject, message
 * @returns {Promise<Object>} - Response with success status
 */
export const submitContactForm = async (data) => {
  // TODO: Replace with Supabase + Resend integration
  // Example future implementation:
  // const { error } = await supabase.from('contact_messages').insert([data]);
  // if (error) throw error;
  // await sendContactNotification(data);

  console.log('Contact form submitted:', data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Message sent! We typically respond within 24 hours.'
      });
    }, 1000);
  });
};

/**
 * Submit footer newsletter form
 * @param {string} email - Email address
 * @returns {Promise<Object>} - Response with success status
 */
export const submitNewsletterForm = async (email) => {
  // TODO: Replace with Supabase + Resend integration

  console.log('Newsletter form submitted:', email);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "You're in! Check your inbox."
      });
    }, 1000);
  });
};
