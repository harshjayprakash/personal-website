import Card from "../components/card";
import Panel from "../components/panel";
import { technicalSkills } from "../data/skills";

export default function About(): JSX.Element {
    return (
        <>
        <h1>About</h1>
        <p>
            An enthusiatic and capable student currently on Year 2 of BSc (Hons) Computer Science,
            a degree focused on digital technologies, understanding the software development,
            security and hardware aspects. I have further developed my knowledge on these topics
            throughout my degree, increasing my understanding of how computers work. However,
            technology is evolving constantly, and I am eager to always continue learning more
            about it.
        </p>
        <br/>
        <h2>Technical Skills</h2>
        <br/>
        <section className="project-cards">
            <Panel name={technicalSkills[0].name} description={technicalSkills[0].languages} />
            <Panel name={technicalSkills[1].name} description={technicalSkills[1].languages} />
        </section>
        <br/>
        <p>*Currently learning at university.</p>
        </>
    );
}