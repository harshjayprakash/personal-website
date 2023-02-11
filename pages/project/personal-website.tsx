import ProjectHeader from "../../components/project-header";
import { programmingProjects } from "../../data/projects";

export default function PersonalWebsite(): JSX.Element {
    return (
        <>
        <ProjectHeader {...programmingProjects[0]} />
        </>
    );
}