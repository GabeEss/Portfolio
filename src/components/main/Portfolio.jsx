import ProjectContainer from "./ProjectContainer";

const Portfolio = () => {
    // Define an array of project data with specific information
    const projects = [
        { 
            title: "Todo List",
            description: "An application for making to-do lists. Utilizes vanilla JS.",
            deployLink: "https://gabeess.github.io/Todo-List/",
            projectLink: "https://github.com/GabeEss/Todo-List"
        },
        { 
            title: "Knight Travails",
            description: "Find the quickest path for a knight to traverse a chessboard. Utilizes webpack.",
            deployLink: "https://gabeess.github.io/Knight-Travails/",
            projectLink: "https://github.com/GabeEss/Knight-Travails"
        },
        { 
            title: "Battleship",
            description: "Play a game of battleship against the AI. Utilizes webpack and jest.",
            deployLink: "https://gabeess.github.io/Battleship/",
            projectLink: "https://github.com/GabeEss/Battleship"
        },
        { 
            title: "Memory Card Game",
            description: "A game where you don't want to click the same card twice. Utilizes React.",
            deployLink: "https://gabeess.github.io/MemoryCardGame/",
            projectLink: "https://github.com/GabeEss/MemoryCardGame"
        },
        { 
            title: "Shopping Cart",
            description: "Shop for office supplies. Utilizes React.",
            deployLink: "https://gabeess.github.io/ShoppingCart/",
            projectLink: "https://github.com/GabeEss/ShoppingCart"
        },
        { 
            title: "Get it",
            description: "A message board application. Make an account to write posts and comments. Utilizes React and Firebase.",
            deployLink: "https://gabeess.github.io/Get-It/",
            projectLink: "https://github.com/GabeEss/Get-It"
        },
    ];

    return (
        <div id="portfolio">
            {/* Map through the array of projects and render a ProjectContainer for each */}
            {projects.map((project, index) => (
                <ProjectContainer key={index} project={project} />
            ))}
        </div>
    );
}

export default Portfolio;