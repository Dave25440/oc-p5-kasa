import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Error.module.scss";

const Error = () => {
    useEffect(() => {
        document.title = "Kasa - Oups! La page que vous demandez n'existe pas.";
    }, []);

    return (
        <section className={styles.errorblock}>
            <h1 className={styles.errorblock__title}>404</h1>
            <p className={styles.errorblock__text}>
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link to="/oc-p5-kasa" className={styles.errorblock__link}>
                Retourner sur la page d’accueil
            </Link>
        </section>
    );
};

export default Error;
