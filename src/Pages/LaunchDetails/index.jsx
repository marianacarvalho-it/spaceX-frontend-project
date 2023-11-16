import { useParams, Link } from "react-router-dom";
import AddComment from "../AddComment";
import axios from "axios";
import { useEffect, useState } from "react";

const API_URL="https://api.spacexdata.com/v4"

function LaunchDetails() {
    const [launchDetails, setLaunchDetails] = useState([]);
    const {launchId} = useParams();

    useEffect(() => {
        axios.get(`${API_URL}/launches/${launchId}`).then((response) => {
            setLaunchDetails(response.data);
        })
        .catch((error) => console.log(error));
        console.log(launchDetails);
    }, [launchId]);

    return (
        <div className="launch-details">
            <div className="launch-details__header">
                <h2>{launchDetails.name}</h2>
            </div>

            <div className="launch-details__content">
                {launchDetails.links && launchDetails.links.patch && launchDetails.links.patch.small && (
                    <img className="launch-details__image" src={launchDetails.links.patch.small} alt={launchDetails.name} />
                )}
            </div>

            <div className="launch-details-content-buttons">
                {launchDetails.links && launchDetails.links.article && (
                    <a className="launch-details__link" href={launchDetails.links.article} target="_blank" rel="noopener noreferrer">
                        <button className="button button--news">News</button>
                    </a>
                )}
                
                {launchDetails.links && launchDetails.links.webcast && (
                    <a className="launch-details__link" href={launchDetails.links.webcast} target="_blank" rel="noopener noreferrer">
                        <button className="button button--video">Launch Video</button>
                    </a>
                )}
            </div>
           
            <div className="launch-details__comments">
                <AddComment launchId={launchDetails.id} />
            </div>
        </div>
    );
}

export default LaunchDetails;
