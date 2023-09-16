import PropTypes from "prop-types";
import gitlogo from "../../assets/githubmark.png";
import linkicon from "../../assets/externallink.png";

const ProjectContainer = (props) => {
    const {title, description, deployLink, projectLink, screenshot} = props.project;

    return(
        <>
            <div className="project container">
                <img src={screenshot} alt="" className="screenshot"></img>
                <div className="project-text">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="links">
                            <a href={projectLink} target="_blank" rel="noopener noreferrer"><img src={gitlogo} alt={title} className="logo-main"/></a>
                            <a href={deployLink} target="_blank" rel="noopener noreferrer"><img src={linkicon} alt="To deployed site." className="logo-main" /></a>
                </div>
            </div>
        </>
    )
}

ProjectContainer.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        deployLink: PropTypes.string.isRequired,
        projectLink: PropTypes.string.isRequired,
        screenshot: PropTypes.string.isRequired
    }).isRequired,
};

export default ProjectContainer;