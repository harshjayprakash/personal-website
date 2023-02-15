import ProjectHeader from "../../components/project-header";
import { programmingProjects } from "../../data/projects";

export default function BlokExperiment(): JSX.Element {
    return (
        <>
        <ProjectHeader {...programmingProjects[1]} />
        <br/>
        <section className="card card__no-hover">
            <h3>A brief description.</h3>
            <p>{programmingProjects[1].description}</p><br/>
            <img alt="a picture of the main window" className="card__image" src="/assets/projects/blok_wnd.png"/>
            <br/>
            <p>
                When launching the application, a black painted window is created with a pink block at the top left corner.
                Towards the bottom left, there is text showing the X and Y coordinates of the pink square; in addition to whether the block is in a marked location.
                <br/><br/>
                The pink block's location can be changed or manipulated through the use of arrow keys from the keyboard, also updating the coordinates at the bottom.
                <br/><br/>
                The mouse pointer can be used to mark points on the grid; this is indicated by a white block. It can be unmarked by clicking in the same area.
            </p>
        </section>
        </>
    );
}