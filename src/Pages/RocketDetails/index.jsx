import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "https://api.spacexdata.com/v4";

function RocketDetails() {
    const [rocketDetails, setRocketDetails] = useState([]);
    const { rocketId } = useParams();

    useEffect(() => {
        axios.get(`${API_URL}/rockets/${rocketId}`).then((response) => {
            setRocketDetails(response.data);
        })
        .catch((error) => console.log(error));
    }, [rocketId]);

    return (
        <div className="rocket-details">
            <div className="rocket-details__header">
                <h2 className="rocket-details__name">{rocketDetails.name}</h2>
            </div>

            <div className="rocket-details__content">
                <div className="rocket-details__image-wrapper">
                    <img 
                        src={rocketDetails.flickr_images ? rocketDetails.flickr_images[0] : ''} 
                        alt={rocketDetails.name} 
                        className="rocket-details__image" 
                    />
                </div>

                <div className="rocket-details__description">
                    <p className="rocket-details__description-title">Description:</p>
                    <span className="rocket-details__description-text">{rocketDetails.description}</span>
                </div>
            </div>

            <div className="rocket-details__read-more">
                <p>
                    <strong>If you want to read more details about this rocket, click here: </strong>
                    <a href={rocketDetails.wikipedia} target="_blank" rel="noopener noreferrer" className="rocket-details__wikipedia-link">
                        Wikipedia Link
                    </a>
                </p>
            </div>
        </div>
    );
}
export default RocketDetails;