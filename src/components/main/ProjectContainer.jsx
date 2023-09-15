import PropTypes from "prop-types";

const ProjectContainer = (props) => {
    const {title, description, deployLink, projectLink} = props.project;

    return(
        <>
            <div className="project container">
                <p className="screenshot">Screenshot of {title}</p>
                <div>
                    <div>
                        <h4>{title}</h4>
                        <i className="fab fa-github"></i> {/* Use actual GitHub icon */}
                        <a href={projectLink} target="_blank" rel="noopener noreferrer">{title} on Github</a>
                        <a href={deployLink} target="_blank" rel="noopener noreferrer">{title} Deployed</a>
                    </div>
                    <p>{description}</p>
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
    }).isRequired,
};

export default ProjectContainer;