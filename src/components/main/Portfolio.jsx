import ProjectContainer from "./ProjectContainer";
import battleship from "../../assets/Battleship.png";
import knight from "../../assets/KnightTravails.png";
import todo from "../../assets/TodoList.png";
import memory from "../../assets/MemoryCard.png";
import shopping from "../../assets/Shopping.png";
import getit from "../../assets/GetIt.png";

const Portfolio = () => {
    // Define an array of project data with specific information
    const projects = [
        { 
            title: "Todo List",
            description: "An application for making to-do lists. Utilizes vanilla JS.",
            deployLink: "https://gabeess.github.io/Todo-List/",
            projectLink: "https://github.com/GabeEss/Todo-List",
            screenshot: todo
        },
        { 
            title: "Knight Travails",
            description: "Find the quickest path for a knight to traverse a chessboard. Utilizes webpack.",
            deployLink: "https://gabeess.github.io/Knight-Travails/",
            projectLink: "https://github.com/GabeEss/Knight-Travails",
            screenshot: knight
        },
        { 
            title: "Battleship",
            description: "Play a game of battleship against the AI. Utilizes webpack and jest.",
            deployLink: "https://gabeess.github.io/Battleship/",
            projectLink: "https://github.com/GabeEss/Battleship",
            screenshot: battleship
        },
        { 
            title: "Memory Card Game",
            description: "A game where you don't want to click the same card twice. Utilizes React.",
            deployLink: "https://gabeess.github.io/MemoryCardGame/",
            projectLink: "https://github.com/GabeEss/MemoryCardGame",
            screenshot: memory
        },
        { 
            title: "Shopping Cart",
            description: "Shop for office supplies. Utilizes React.",
            deployLink: "https://gabeess.github.io/ShoppingCart/",
            projectLink: "https://github.com/GabeEss/ShoppingCart",
            screenshot: shopping
        },
        { 
            title: "Get it",
            description: "A message board application. Make an account to write posts and comments. Utilizes React and Firebase.",
            deployLink: "https://gabeess.github.io/Get-It/",
            projectLink: "https://github.com/GabeEss/Get-It",
            screenshot: getit
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