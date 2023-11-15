import {Link} from 'react-router-dom';
import React from 'react';

function NavBar(){

    return(
        <div className="navBarTool">
            <Link to="/">
            <img src="/logo3.png" className='navBarImage'></img>
            </Link>
            
            <Link to="/launches">
            <h4>ALL LAUNCHES</h4>
            </Link>
           <Link to="/rockets">
            <h4>ALL ROCKETS</h4>
           </Link>
           <Link to="/crew">
           <h4>CREW LIST</h4>
           </Link>

        </div>
    )
}

export default NavBar;