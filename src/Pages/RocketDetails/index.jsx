import { useParams, Link } from "react-router-dom";

import axios from "axios";

import { useEffect, useState } from "react";

const API_URL="https://api.spacexdata.com/v4"

function RocketDetails(){

    const [rocketDetails, setRocketDetails] = useState([]);
    const [showCommentBox, setShowCommentBox] = useState(false);


    const {rocketId} = useParams();
  
  
    useEffect(()=>{
      axios.get(`${API_URL}/rockets/${rocketId}`).then((response)=>{
          setRocketDetails(response.data);
      })
      .catch((error)=> console.log(error))
    }, [rocketId])

    return(
        <div className="rocket-details-container">
           
            <div className="rocket-details-header">
              <h2>{rocketDetails.name}</h2>
            </div>   
            
            <div className="launch-details-content">
              <div className="launch-details-image">
                <img src={rocketDetails.flickr_images}/>
            </div>
            
            <p>{rocketDetails.description}</p>

            <a href={rocketDetails.wikipedia} target="_Blank">Wiki Link</a>


                <div className="comment-button">
                  <button type="submit">Comment</button>
                  </div>        
                   
            
            </div>
        </div>

      )


}

export default RocketDetails;