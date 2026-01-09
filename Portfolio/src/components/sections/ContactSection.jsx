import SectionTitle from './SectionTitle';

function ContactSection() {
  return (
    <section className="section contact" id="contact">
      <SectionTitle lead="LET'S WORK" highlight="TOGETHER" />
      <form className="contact-form">
        <label>
          Name
          <input type="text" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="you@email.com" />
        </label>
        <label>
          Budget
          <select>
            <option>Select...</option>
            <option>$1k - $5k</option>
            <option>$5k - $15k</option>
            <option>$15k+</option>
          </select>
        </label>
        <label className="contact-form__message">
          Message
          <textarea placeholder="Tell me about your project" rows="4"></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactSection;
