import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = "https://api.spacexdata.com/v4";

const defaultImage = "./src/assets/Soyuz_TMA-9_launch.jpg"

function RocketsLaunchList() {
  const [rockets, setRockets] = useState([]);
  
  
  useEffect(()=>{
    axios.get(`${API_URL}/rockets`).then((response)=>{
        setRockets(response.data);
    })
    .catch((error)=> console.log(error))
  }, [])



  return(
    <div className='launchListScreen'>
      <div className='listImagesGrid'>
        {rockets.map((rocket)=>{
            return(
                <div key={rocket.id} className='square-div'>
                    <h2>{rocket.name}</h2>
                    <Link to={`/rockets/${rocket.id}`}>
                    <img src={rocket.flickr_images || defaultImage} className='listImages'/>
                    </Link>
                </div>
            )
        })}
      </div>
    </div>
  )
  
 }

export default RocketsLaunchList;
