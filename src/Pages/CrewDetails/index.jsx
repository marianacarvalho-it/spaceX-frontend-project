import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const API_URL="https://api.spacexdata.com/v4"

function CrewDetails(){
    
    const [crewDetails, setCrewDetails] = useState([]);

    const {crewId} = useParams();

    useEffect(()=>{
        axios.get(`${API_URL}/crew/${crewId}`).then((response)=>{
            setCrewDetails(response.data);
        })
        .catch((error)=> console.log(error))
    }, [crewId]);

    return(
        <div>
            <h2>{crewDetails.name}</h2>
            <div className="crew-details-image">
                <img src={crewDetails.image}/>
            </div>
            <div className="crew-agency">
                <p>Agency: {crewDetails.agency}</p>
            </div>
            <div className="crew-status">
                <p><b>Status: {crewDetails.status}</b></p>
            </div>
            <Link to={`/launches/${crewDetails.launches}`}>
                Launches
            </Link>
        </div>
    )
}
export default CrewDetails;