import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = "https://api.spacexdata.com/v4";
const defaultImage = "./src/assets/Soyuz_TMA-9_launch.jpg";

function RocketsLaunchList() {
    const [rockets, setRockets] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/rockets`).then((response) => {
            setRockets(response.data);
        })
        .catch((error) => console.log(error));
    }, []);

    return (
        <div className='rockets-launch-list__screen'>
            <div className='rockets-launch-list__grid'>
                {rockets.map((rocket) => {
                    return (
                        <div key={rocket.id} className='rocket-item'>
                            <Link to={`/rockets/${rocket.id}`} className='rocket-item__link'>
                                <img src={rocket.flickr_images[0] || defaultImage} className='rocket-item__image' alt={rocket.name} />
                            </Link>
                            <h2 className='rocket-item__name'>{rocket.name}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
export default RocketsLaunchList;