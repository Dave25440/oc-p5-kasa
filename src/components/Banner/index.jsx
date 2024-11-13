import { useLocation } from "react-router-dom";
import styles from "./Banner.module.scss";

const Banner = () => {
    const location = useLocation();

    return (
        <div
            className={`${styles.bannerblock} ${
                location.pathname === "/oc-p5-kasa/a-propos" &&
                styles["bannerblock--alt"]
            }`}
        >
            <h1
                className={`${styles.bannerblock__title} ${
                    location.pathname === "/oc-p5-kasa/a-propos" &&
                    styles["bannerblock__title--hidden"]
                }`}
            >
                Chez vous, partout et ailleurs
            </h1>
        </div>
    );
};

export default Banner;
