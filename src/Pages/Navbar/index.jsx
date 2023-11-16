import { Link } from 'react-router-dom';
import React from 'react';


function NavBar() {
    return (
        <div className="navBar">
            <Link to="/" className="navBarItem">
                <img src="/src/assets/logo3.png" alt="SpaceX Logo" className='navBarImage' />
            </Link>
            <Link to="/launches" className="navBarItem">
                <span>LAUNCHES</span>
            </Link>
            <Link to="/rockets" className="navBarItem">
                <span>ROCKETS</span>
            </Link>
            <Link to="/crew" className="navBarItem">
                <span>CREW</span>
            </Link>
        </div>
    )
}

export default NavBar;
