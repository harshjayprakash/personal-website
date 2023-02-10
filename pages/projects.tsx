import Card from "../components/card";
import { programmingProjects } from "../data/projects";

export default function Projects(): JSX.Element {
    
    var projects: Array<JSX.Element> = new Array<JSX.Element>();
    for (let i = 0; i < programmingProjects.length; i++) {
        projects.push(<Card {...programmingProjects[i]} />)
    }

    return (
        <>
        <h1>Projects</h1>
        <p>Below shows the projects I have undertaken both during education and within my own time.</p>
        <br/><br/>
        <section className="project-cards">
            <>{projects}</>
        </section>
        </>
    );
}