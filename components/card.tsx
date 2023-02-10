export default function Card({ name, languages, description, link }): JSX.Element {
    return (
        <article className="card">
            <small className="card__languages">{languages}</small>
            <span className="card__title">{name}</span>
            <p className="card__description">{description}</p>
            <a className="card__link" href={link}>View Details &lt;</a>
        </article>
    );
}