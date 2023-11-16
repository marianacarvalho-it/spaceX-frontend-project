import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "https://api.spacexdata.com/v4";

function CrewDetails() {
    const [crewDetails, setCrewDetails] = useState([]);
    const { crewId } = useParams();

    useEffect(() => {
        axios.get(`${API_URL}/crew/${crewId}`).then((response) => {
            setCrewDetails(response.data);
        })
        .catch((error) => console.log(error));
    }, [crewId]);

    return (
        <div className="crew-details">
            <h2 className="crew-details__name">{crewDetails.name}</h2>
            <div className="crew-details__image">
                <img src={crewDetails.image} alt={crewDetails.name} />
            </div>
            <div className="crew-details__agency">
                <p><b>Agency:</b> {crewDetails.agency}</p>
            </div>
            <div className="crew-details__status">
                <p><b>Status:</b> {crewDetails.status}</p>
            </div>
            <Link to={`/launches/${crewDetails.launches}`} className="crew-details__launches-link">
                Launches
            </Link>
        </div>
    );
}

export default CrewDetails;
