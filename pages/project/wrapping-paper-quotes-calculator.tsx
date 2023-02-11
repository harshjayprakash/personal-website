import ProjectHeader from "../../components/project-header";
import { programmingProjects } from "../../data/projects";

export default function WrappingPaperQuotesCalculator(): JSX.Element {
    return (
        <>
        <ProjectHeader {...programmingProjects[2]} />
        </>
    );
}