import React from 'react';
import { Link } from 'react-router-dom';

const Activity = (props) => {
    const {name , image, color} = props;

    return (
        <div class="card" style={{width: '18rem'}}>
            <img src={image} class="card-img-top" alt="..."/>
            <div style={{backgroundColor: color}}class="card-body">
                <Link to={"/activity/"+name}>
                <h5 style={{textTransform: 'uppercase', color: '#fff'}} class="card-title">{name}</h5>
                </Link>
            </div>
        </div>
    );
};

export default Activity;