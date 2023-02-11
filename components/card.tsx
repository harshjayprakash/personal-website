export default function Card({ name, languages, description, link }): JSX.Element {
    return (
        <a className="card" href={link}>
            <small className="card__languages">{languages}</small>
            <span className="card__title">{name}</span>
            <p className="card__description">{description}</p>
            <a className="card__link">View Details &gt;</a>
        </a>
    );
}