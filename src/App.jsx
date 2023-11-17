import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import LaunchList from './Pages/LaunchList';
import RocketsLaunchList from './Pages/RocketsList';
import RocketDetails from './Pages/RocketDetails';
import LaunchDetails from './Pages/LaunchDetails';
import NavBar from './Pages/Navbar';
import CrewList from './Pages/CrewList';
import CrewDetails from './Pages/CrewDetails';

function App() {
  
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/rockets" element={<RocketsLaunchList/>}/>
        <Route path="/rockets/:rocketId" element={<RocketDetails/>}/>

        <Route path="/launches" element={<LaunchList />}/>
        <Route path="/launches/:launchId" element={<LaunchDetails/>}/>

        <Route path="/crew" element={<CrewList/>}/>
        <Route path="/crew/:crewId" element={<CrewDetails/>}/>
        
        </Routes>        
    </div>
  )
}
export default App