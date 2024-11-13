import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import Logo from "../../assets/kasa-logo.svg";
import SmallLogo from "../../assets/kasa-logo-small.svg";

const Header = () => {
    const location = useLocation();

    return (
        <header className={styles.headblock}>
            <picture>
                <source srcSet={SmallLogo} media="(max-width: 768px)" />
                <img src={Logo} alt="Kasa" />
            </picture>
            <nav>
                <ul className={styles.headblock__list}>
                    <li>
                        <Link
                            to="/oc-p5-kasa/"
                            className={`${styles.headblock__link} ${
                                location.pathname === "/oc-p5-kasa/" &&
                                styles["headblock__link--underline"]
                            }`}
                        >
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/oc-p5-kasa/a-propos"
                            className={`${styles.headblock__link} ${
                                location.pathname === "/oc-p5-kasa/a-propos" &&
                                styles["headblock__link--underline"]
                            }`}
                        >
                            À Propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
