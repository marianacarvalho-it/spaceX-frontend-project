import {Link} from 'react-router-dom';
/* import React from 'react'; */

function NavBar(){

    return(
        <div className="navBarTool">
            <Link to="/">
            <img src="./src/assets/homepage.png" className='navBarImage'></img>
            </Link>
            <Link to="/launches">
                <h4>All Launches</h4>
            </Link>
            <Link to="/rockets">
                <h4>All Rockets</h4>
            </Link>
            <Link to="/crew">
                <h4>Crew List</h4>
            </Link>
        </div>
    )
}

export default NavBar;