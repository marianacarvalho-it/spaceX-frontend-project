import { useParams, /* Link */ } from "react-router-dom";
import Comments from "../Comments";
import axios from "axios";

import { useEffect, useState } from "react";

const API_URL="https://api.spacexdata.com/v4"

function LaunchDetails(){

    const [launchDetails, setLaunchDetails] = useState([]);
    
    const {launchId} = useParams()
    
    useEffect(()=>{
      axios.get(`${API_URL}/launches/${launchId}`).then((response)=>{
          setLaunchDetails(response.data);
      })
      .catch((error)=> console.log(error))
    }, [launchId])

    return(
        <div className="launch-details-container">
          
            <div className="launch-details-header">
              <h2>{launchDetails.name}</h2>
            </div>   
            <div className="launch-details-content">
              <div className="launch-details-image">
                  {launchDetails.links && launchDetails.links.patch && launchDetails.links.patch.small && (
                  <img src={launchDetails.links.patch.small} alt={launchDetails.name} />
                  )}
              </div>
            <div className="launch-details-news">
                  {launchDetails.links && launchDetails.links.article && (
                  <a href={launchDetails.links.article} rel="noreferrer" target="_blank">News</a>
                  )}
            </div>
            <div className="launch-details-video">
              {launchDetails.links && launchDetails.links.webcast && (
                <a href={launchDetails.links.webcast} rel="noreferrer" target="_blank">Launch Video</a>
              )}
            </div>
                <div className="comment-button">
                  <Comments/>
                </div>                      
            </div>
        </div>
      )
}
export default LaunchDetails;

