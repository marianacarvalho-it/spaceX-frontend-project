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
    <div className='rocket-list-screen'>
      <div className='rocket-list-image-grid'>
        {rockets.map((rocket)=>{
            return(
                <div key={rocket.id} className='rocket-square-div'>
                    <Link to={`/rockets/${rocket.id}`}>
                    <img src={rocket.flickr_images || defaultImage} className='rocket-list-images'/>
                    </Link>
                    <h2>{rocket.name}</h2>
                </div>
            )
        })}
      </div>
    </div>
  )
  
 }

export default RocketsLaunchList;
