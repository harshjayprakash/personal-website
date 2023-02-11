export default function ProjectHeader({ name, languages, tools, frameworks, platform }): JSX.Element {
    return (
        <section className="project-header">
            <a className="link" href="/projects">&lt; Projects</a><br/>
            <h2>{name}</h2>
            <small>
                Languages: {languages} <br/>
                Tools: {tools} <br/>
                Frameworks/APIs: {frameworks} <br/>
                Platform: {platform}
            </small>
        </section>
    )
}