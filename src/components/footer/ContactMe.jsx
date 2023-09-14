const ContactMe = () => {
    return(
    <section className="contact">
        <h2>Contact Me</h2>
        <p>I am open to new opportunities! Get in touch if you are interested in working together!</p>

        <address>
            <p>1234 Made Up Avenue</p>
            <p>Toronto, Ontario</p>
        </address>

        <ul className="contact-details">
            <li>
            <i className="fab fa-github"></i> {/* Use actual GitHub icon */}
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
            </li>
            <li>
            <i className="fab fa-linkedin"></i> {/* Use actual LinkedIn icon */}
            <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
            </li>
        </ul>
    </section>
    )
}

export default ContactMe;