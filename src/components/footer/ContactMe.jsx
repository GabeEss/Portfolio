import linkedlogo from "../../assets/LinkedInIcon.png";
import gitlogo from "../../assets/GitHub_Logo_White.png";

const ContactMe = () => {
    return(
    <section className="contact">
        <h2>Contact Me</h2>
        <p>I am open to new opportunities! Get in touch if you are interested in working together!</p>
        
        <div id="based">
            <p>I am based in </p>
            <address>
                <p>Toronto, Ontario</p>
            </address>
            <p>.</p>
        </div>

        <><a href="">Send Email</a></>

        <ul className="contact-details">
            <li>
                <a href="https://github.com/GabeEss" target="_blank" rel="noopener noreferrer"><img src={gitlogo} alt="Gabe's Github Page" className="logo-footer" /></a>
            </li>
            <li>
                <a href="" target="_blank" rel="noopener noreferrer"><img src={linkedlogo} alt="Gabe's LinkedIn Page" className="logo-footer"></img></a>
            </li>
        </ul>
        <a href="https://www.flaticon.com/free-icons/external-link" title="external link icons">External link icons created by Bharat Icons - Flaticon</a>
    </section>
    )
}

export default ContactMe;