import Collapse from "../Collapse";
import styles from "./Details.module.scss";

const Details = ({
    title,
    description,
    hostName,
    hostPicture,
    rating,
    location,
    equipments,
    tags
}) => {
    return (
        <section className={styles.detailsgrid}>
            <div className={styles.detailsgrid__titleblock}>
                <h1 className={styles.detailsgrid__title}>{title}</h1>
                <p className={styles.detailsgrid__location}>{location}</p>
            </div>
            <figure className={styles.detailsgrid__host}>
                <figcaption className={styles.detailsgrid__hostname}>
                    {hostName}
                </figcaption>
                <img
                    src={hostPicture}
                    alt={hostName}
                    className={styles.detailsgrid__hostpicture}
                />
            </figure>
            <ul className={styles.detailsgrid__list}>
                <li>
                    <ul className={styles.detailsgrid__tags}>
                        {tags.map((tag) => (
                            <li className={styles.detailsgrid__tag}>{tag}</li>
                        ))}
                    </ul>
                </li>
                <Collapse
                    title="Description"
                    titleClass="collapsebar__title--details"
                    content={description}
                />
            </ul>
            <ul className={styles.detailsgrid__list}>
                <li className={styles.detailsgrid__rating}>{rating}</li>
                <Collapse
                    title="Équipements"
                    titleClass="collapsebar__title--details"
                    content={
                        <ul className={styles.detailsgrid__equipments}>
                            {equipments.map((equipment) => (
                                <li>{equipment}</li>
                            ))}
                        </ul>
                    }
                />
            </ul>
        </section>
    );
};

export default Details;
