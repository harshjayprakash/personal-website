export default function Panel({ name, description }): JSX.Element {
    return (
        <article className="card card__no-hover">
            <span className="card__title">{name}</span>
            <p className="card__description">{description}</p>
        </article>
    );
}