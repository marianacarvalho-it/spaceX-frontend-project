import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = "https://api.spacexdata.com/v4";
const defaultImage = "./src/assets/Soyuz_TMA-9_launch.jpg";

function LaunchList() {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/launches`).then((response) => {
            setLaunches(response.data);
        })
        .catch((error) => console.log(error));
    }, []);

    return (
        <div className='launch-list'>
            <div className='launch-list__grid'>
                {launches.map((launch) => {
                    return (
                        <div key={launch.id} className='launch-list__item'>
                            <Link to={`/launches/${launch.id}`}>
                                <img src={launch.links.patch.small || defaultImage} className='launch-list__image' />
                            </Link>
                            <div className='launch-list__details'>
                                <h2 className='launch-list__name'>{launch.name}</h2>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default LaunchList;
