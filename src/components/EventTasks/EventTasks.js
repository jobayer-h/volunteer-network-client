import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Event from './Event';
import Logo from '../../logos/Group 1329.png'
import { UserContext } from '../../App';
import { useEffect } from 'react';
import { handleLogout } from '../nav/Nav';

const EventTasks = () => {
    // eslint-disable-next-line
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
    const [events, setEvents] = useState([]);
    useEffect(() =>{
        fetch('https://volunteer-react.herokuapp.com/allevents?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setEvents(data))
    })

    return (
    <div className="login-page event-page">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                    
                    <Link className="navbar-brand" to="/"><img className="logo" src={Logo} alt=""/></Link>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    <Link className="nav-link" to="/">Donation</Link>
                    <Link className="nav-link" to="/events">Events</Link>
                    <Link className="nav-link" to="/">Blog</Link>
                    <strong className="nav-link">{loggedInUser.displayName}</strong>
                    <Link onClick={handleLogout} className="btn btn-dark btn-spacing" to="/">Log Out</Link>
                    </div>                    
                </div>
            </nav>
                </div>
            </div>
            <div className="row">
                {
                    events.map(event => <Event data={event}></Event>)
                }
                
            </div>
        </div>
    </div>
    );
};

export default EventTasks;