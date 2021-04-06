import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Logo from '../../logos/Group 1329.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import { UserContext } from '../../App';
firebase.initializeApp(firebaseConfig);
    
const Login = () => {


    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    // eslint-disable-next-line
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
    const handleLogin = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            const user = result.user;
            setLoggedInUser(user);
            history.replace(from);
        }).catch(function(error) {
            const errorMessage = error.message;
            alert(errorMessage);        
        });
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
                    <div className="login-box">
                        <div>
                        <h3>Login with</h3>
                        <button onClick={handleLogin} className="btn btn-primary">Continue with Google</button>
                        <p>Don’t have an account? <Link to="/login">Create an account</Link></p>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;