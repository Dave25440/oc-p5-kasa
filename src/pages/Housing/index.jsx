import { Fragment, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import housingList from "../../data/housingList.json";
import Slideshow from "../../components/Slideshow";
import Details from "../../components/Details";

const Housing = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        housingList.find(
            (housing) =>
                housing.id === id &&
                (document.title = `Kasa - ${housing.title}`)
        );

        const foundId = housingList.find((housing) => housing.id === id);

        if (!foundId) {
            navigate("/oc-p5-kasa/erreur");
        }
    }, [id, navigate]);

    return (
        <>
            {housingList.map(
                (housing) =>
                    housing.id === id && (
                        <Fragment key={housing.id}>
                            <Slideshow
                                key={`slideshow-${housing.id}`}
                                title={housing.title}
                                pictures={housing.pictures}
                            />
                            <Details
                                key={`details-${housing.id}`}
                                title={housing.title}
                                description={housing.description}
                                hostName={housing.host.name}
                                hostPicture={housing.host.picture}
                                rating={housing.rating}
                                location={housing.location}
                                equipments={housing.equipments}
                                tags={housing.tags}
                            />
                        </Fragment>
                    )
            )}
        </>
    );
};

export default Housing;
