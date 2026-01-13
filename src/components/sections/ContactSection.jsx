import SectionTitle from './SectionTitle';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const MAX_SENDS = 5;
    const WINDOW_MS = 24 * 60 * 60 * 1000;
    const key = 'contact_send_log';

    const now = Date.now();
    const log = JSON.parse(localStorage.getItem(key) || '[]');
    const recent = log.filter((t) => now - t < WINDOW_MS);

    if (recent.length >= MAX_SENDS) {
      alert('Limit reached. Try again tomorrow.');
      return;
    }

    try {
      // send first email
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // send second email
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_2,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // ✅ record ONLY after success
      recent.push(now);
      localStorage.setItem(key, JSON.stringify(recent));

      alert('Emails sent successfully!');
      e.target.reset();
      setFormData({ name: '', email: '', budget: '', message: '' });
    } catch (err) {
      console.error('Email failed:', err);
      alert('Failed to send emails. Please try again later.');
    }
  };

  // Check if user started typing
  const hasTyped = Object.values(formData).some((val) => val.trim() !== '');

  // Build email preview dynamically
  const preview = `
Name: ${formData.name}
Email: ${formData.email}
Budget: ${formData.budget}
Message: ${formData.message}
  `;

  return (
    <section className="section contact" id="contact">
      <SectionTitle lead="LET'S WORK" highlight="TOGETHER" />
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            name="name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="you@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Budget
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
          >
            <option value="">Select...</option>
            <option>$100 - $1k</option>
            <option>$1k - $5k</option>
            <option>$5k - $15k</option>
            <option>$15k+</option>
          </select>
        </label>
        <label className="contact-form__message">
          Message
          <textarea
            name="message"
            placeholder="Tell me about your project"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>

      {/* Email Preview */}
      {hasTyped && (
        <div
          style={{
            marginTop: '20px',
            whiteSpace: 'pre-wrap',
            background: '#ddafaf02',
            padding: '10px',
            borderRadius: '8px',
          }}
        >
          <h3>Email Preview:</h3>
          <p>{preview}</p>
        </div>
      )}
    </section>
  );
}

export default ContactSection;
