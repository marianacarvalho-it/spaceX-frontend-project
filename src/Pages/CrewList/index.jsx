import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const API_URL = "https://api.spacexdata.com/v4"

function CrewList (){
    const [crews, setCrew] = useState([]);

    useEffect(()=>{
        axios.get(`${API_URL}/crew`).then((response)=>{
            setCrew(response.data);
        })
        .catch((error)=> console.log(error))

    }, [])

    return(
        <div className='crew-list-screen'>
            <div className='crew-images-grid'>
            {crews.map((crew)=>{
                return(
                    <div key={crew.id} className='crew-square-div'>
                        <h2>{crew.name}</h2>
                        <Link to={`/crew/${crew.id}`}>
                        <img src={crew.image} className='crew-list-images'/>
                        </Link>
                    </div>
                )
            })}
            </div>
        </div>
    )
}
export default CrewList;