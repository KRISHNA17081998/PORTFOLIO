import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');


    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template ID
        formData, // Form data
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Public Key
      )
      .then((response) => {
        console.log('Success:', response);
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      })
      .catch((error) => {

        console.error('Error response:', error);
        setStatus('Failed to send message. Please try again.');
        setTimeout(() => setStatus(''), 3000);
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-600 text-center mb-4">Contact Me</h2>
        <div className="w-24 h-1 bg-black mx-auto mb-12"></div>

        <div className="bg-white dark:bg-gray-800 p-6 sm:p-10 md:p-12 rounded-lg shadow-lg mb-12 w-full max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800 dark:text-white text-center">Get in Touch</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="form-name" value="contact-form" />

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2 text-base sm:text-lg">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 text-base sm:text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white bg-white dark:bg-gray-700"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2 text-base sm:text-lg">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 text-base sm:text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white bg-white dark:bg-gray-700"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2 text-base sm:text-lg">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 text-base sm:text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white bg-white dark:bg-gray-700 h-40 resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'Sending...'}
              className="w-full bg-blue-600 text-white py-3 sm:py-4 text-lg rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {status === 'Sending...' ? 'Sending...' : 'Send Message'}
            </button>

            {status && (
              <p
                className={`text-center text-lg ${
                  status.includes('successfully') ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
