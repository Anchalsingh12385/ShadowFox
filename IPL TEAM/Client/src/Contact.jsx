const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Thanks for reaching out! We will get back to you soon.')
  }

  return (
    <section className="page-container">
      <div className="page-title">
        <h2>Contact</h2>
        <p className="lead">Send us a message or connect with the club team.</p>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3>Club contact</h3>
          <ul className="summary-list">
            <li>
              <strong>Office</strong>
              <span>ShadowFox Stadium, Pune</span>
            </li>
            <li>
              <strong>Email</strong>
              <span>support@shadowfoxsuperkings.com</span>
            </li>
            <li>
              <strong>Phone</strong>
              <span>+91 98765 43210</span>
            </li>
          </ul>
        </div>

        <form className="card form-grid" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" required placeholder="Your name" />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required placeholder="Your email" />
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required placeholder="How can we help?"></textarea>
          </div>

          <button type="submit">Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
