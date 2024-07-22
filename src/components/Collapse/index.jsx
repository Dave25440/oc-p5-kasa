import { useState } from "react";
import styles from "./Collapse.module.scss";
import ChevronUp from "../../assets/chevron-up.png";
import SmallChevronUp from "../../assets/chevron-up-small.png";

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <li className={styles.collapsebar}>
                <h2 className={styles.collapsebar__title}>{title}</h2>
                <button
                    className={styles.collapsebar__button}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <picture>
                        <source
                            srcSet={SmallChevronUp}
                            media="(max-width: 768px)"
                        />
                        <img src={ChevronUp} alt="Bouton d'affichage" />
                    </picture>
                </button>
                {isOpen && (
                    <p className={styles.collapsebar__text}>{content}</p>
                )}
            </li>
        </>
    );
};

export default Collapse;
