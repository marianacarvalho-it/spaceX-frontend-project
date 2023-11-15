import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = "https://api.spacexdata.com/v4";

const defaultImage = "./src/assets/Soyuz_TMA-9_launch.jpg"

function LaunchList() {

  const [launches, setLaunches] = useState([]);


  useEffect(()=>{
    axios.get(`${API_URL}/launches`).then((response)=>{
        setLaunches(response.data);
    })
    .catch((error)=> console.log(error))
  }, [])


  return(
    <div className='launchListScreen'>
      <div className='listImagesGrid'>
        {launches.map((launch)=>{
            return(
                <div key={launch.id} className='launch-item'>
                    <Link to={`/launches/${launch.id}`}>
                    <img src={launch.links.patch.small || defaultImage} className='listImages'/>
                    </Link>
                    <div className='square-div'>
                    <h2>{launch.name}</h2>
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  )
 }
export default LaunchList;