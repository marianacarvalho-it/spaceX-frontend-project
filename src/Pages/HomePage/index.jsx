import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://api.spacexdata.com/v4"

function HomePage(){

    const [company, setCompany]= useState([]);

    useEffect(()=>{
        axios.get(`${API_URL}/company`).then((response)=>{
            setCompany(response.data)
        })
        .catch((error)=> console.log(error))
    }, [])

    return(
        <div>
            <div className="home-page-screen">
                <h1>Explore All SpaceX Launches</h1>   
                <h2>{company.summary}</h2>
            </div>
        </div>
    )
}
export default HomePage;