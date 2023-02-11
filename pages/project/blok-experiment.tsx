import ProjectHeader from "../../components/project-header";
import { programmingProjects } from "../../data/projects";

export default function BlokExperiment(): JSX.Element {
    return (
        <>
        <ProjectHeader {...programmingProjects[1]} />
        </>
    );
}