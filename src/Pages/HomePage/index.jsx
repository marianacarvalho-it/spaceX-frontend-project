import React, { useEffect, useState } from "react";
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
              <h1>SpaceX World</h1>   
             
            </div>
            <div className="second-homepage">
                <div className="left-page">
                <h2>ABOUT US:</h2>
                <h3>SpaceX designs, manufactures and launches advanced rockets and spacecraft.The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.</h3>
                </div>
            <div className="right-page">
              
            </div>
              </div> 
        </div>
    )

}

export default HomePage;