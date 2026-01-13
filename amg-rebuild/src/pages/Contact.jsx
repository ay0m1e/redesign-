function Contact() {
  return (
    <main className="page-shell">
      <section className="page-section">
        <div className="content-boundary page-section__inner">
          <h1 className="page-title">Contact</h1>
          <p className="page-lede">
            For project enquiries, tender discussions, or general questions, contact AMG London using the details
            below.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="content-boundary contact-layout">
          <div className="contact-card contact-card--details">
            <h2 className="contact-card__title">Contact details</h2>
            <dl className="contact-details">
              <div className="contact-details__row">
                <dt>Company</dt>
                <dd>AMG London Ltd - Head Office</dd>
              </div>
              <div className="contact-details__row">
                <dt>Phone</dt>
                <dd>
                  <a href="tel:+442085919253">+44 020 8591 9253</a>
                </dd>
              </div>
              <div className="contact-details__row">
                <dt>Email</dt>
                <dd>
                  <a href="mailto:amg.london.ltd@gmail.com">amg.london.ltd@gmail.com</a>
                </dd>
              </div>
              <div className="contact-details__row">
                <dt>Office hours</dt>
                <dd>Monday to Friday, 09:00 to 17:00</dd>
              </div>
            </dl>
          </div>

          <div className="contact-card contact-card--form">
            <h2 className="contact-card__title">Enquiry form</h2>
            <form className="contact-form" action="#" method="post">
              <div className="contact-form__row">
                <label htmlFor="contact-name">Name</label>
                <input id="contact-name" name="name" type="text" autoComplete="name" required />
              </div>
              <div className="contact-form__row">
                <label htmlFor="contact-company">Company</label>
                <input id="contact-company" name="company" type="text" autoComplete="organization" />
              </div>
              <div className="contact-form__row">
                <label htmlFor="contact-email">Email</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="contact-form__row">
                <label htmlFor="contact-phone">Phone</label>
                <input id="contact-phone" name="phone" type="tel" autoComplete="tel" />
              </div>
              <div className="contact-form__row">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" rows="5" required />
              </div>
              <button className="contact-form__submit" type="submit">
                Send enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
