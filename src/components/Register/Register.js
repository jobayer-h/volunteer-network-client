import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Logo from '../../logos/Group 1329.png'

const Register = () => {
    const {activitytype} = useParams();
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);


    const handleNewRegistration = () => {
        const name = loggedInUser.name;
        const email = loggedInUser.email;
        const date = document.getElementById('date').value;
        const details = document.getElementById('details').value;
        const task = document.getElementById('task').value;

        const newRegistration = {
            name: name,
            email: email,
            date: date,
            details: details,
            task: task
        }

        fetch('https://volunteer-react.herokuapp.com/addTask', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(newRegistration)
        })
        .then(res => res.json())
        .then(data => {
            alert('Booking Success')
        })
    }

    



    return (
        <div className="login-page">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="login-logo">
                    <Link to="/">
                        <img src={Logo} alt=""/>
                    </Link>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="register-box">
                    <form>
                        <h3>Register as a Volunteer</h3>
                        <div class="form-group">
                            <input type="text" placeholder="Full Name" defaultValue={loggedInUser.name} class="form-control" id="name"/>
                        </div>
                        <div class="form-group">
                            <input type="email" placeholder="Username or Email" defaultValue={loggedInUser.email} class="form-control" id="email"/>
                        </div>
                        <div class="form-group">
                            <input type="date" placeholder="Date" defaultValue = {new Date()} class="form-control" id="date"/>
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Desicription" defaultValue={`Hi, I am ${loggedInUser.name}. I wants to work with you as a Volunteer` } class="form-control" id="details"/>
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Organize books at the library" defaultValue = {activitytype} class="form-control" id="task"/>
                        </div>
                        <button onClick={handleNewRegistration} type="submit" class="btn btn-primary">Register</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;