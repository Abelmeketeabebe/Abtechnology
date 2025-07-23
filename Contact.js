export function createContact() {
  return `
    <section id="contact" class="section contact">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-subtitle">Ready to transform your business with innovative technology solutions? Let's discuss your project.</p>
        </div>
        <div class="contact-content">
          <div class="contact-info animate-on-scroll">
            <h3>Contact Information</h3>
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div>
                <strong>Address</strong><br>
               ADDIS ABABA <br>
                ADDIS KETEMA WEREDA 5 ,H.O 049
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">📞</div>
              <div>
                <strong>Phone</strong><br>
                +251 922950423
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">✉️</div>
              <div>
                <strong>Email</strong><br>
                belamekete@gmail.com
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">🕒</div>
              <div>
                <strong>Business Hours</strong><br>
                Mon - Fri: 9:00 AM - 6:00 PM PST
              </div>
            </div>
          </div>
          <form class="contact-form animate-on-scroll">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
              <label for="company">Company</label>
              <input type="text" id="company" name="company">
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell us about your project..." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">
              Send Message
              <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  `
}