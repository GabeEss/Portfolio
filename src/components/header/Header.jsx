import AboutMe from "./AboutMe";
import PortraitContainer from "./PortraitContainer";

const Header = () => {
    return(
        <header>
            <div className="portrait-container">
                <PortraitContainer/>
            </div>
            <div className="aboutme-container">
                <AboutMe/>
            </div>
        </header>
    )
}

export default Header;