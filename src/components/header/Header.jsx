import AboutMe from "./AboutMe";
import PortraitContainer from "./PortraitContainer";
import "../../css/Header.css";

const Header = () => {
    return(
        <header>
            <div className="portrait1 container">
                <PortraitContainer/>
                <div className="text-overlay">
                    <h2>GabeEss</h2>
                </div>
            </div>
            <div className="aboutme container">
                <AboutMe/>
            </div>
        </header>
    )
}

export default Header;