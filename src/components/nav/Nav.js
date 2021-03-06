import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../logos/Group 1329.png'
import * as firebase from "firebase/app";
import "firebase/auth";
export const handleLogout = () => {
    firebase.auth().signOut().then(() => {
        window.location.reload();
        return false;
    }).catch((error) => {
        console.log(error);
    });
}
const Nav = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light">

            <Link className="navbar-brand" to="/"><img className="logo" src={Logo} alt="" /></Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav ">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    <Link className="nav-link" to="/">Donation</Link>
                    <Link className="nav-link" to="/events">Events</Link>
                    <Link className="nav-link" to="/">Blog</Link>
                    {
                        firebase.auth().currentUser ?
                            <Link onClick={handleLogout} className="btn btn-dark btn-spacing" to="/">Log Out</Link>
                            :
                            <div>
                                <Link className="btn btn-primary btn-spacing" to="/login">Register</Link>
                                <Link className="btn btn-dark btn-spacing" to="/">Admin</Link>
                            </div>
                    }

                </div>
            </div>
        </nav>
    );
};

export default Nav;