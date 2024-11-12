import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

const Card = ({ id, title, cover }) => {
    return (
        <Link to={`/oc-p5-kasa/logement/${id}`} className={styles.cardblock}>
            <article>
                <img
                    src={cover}
                    alt={title}
                    className={styles.cardblock__cover}
                />
                <h2 className={styles.cardblock__title}>{title}</h2>
            </article>
        </Link>
    );
};

export default Card;
