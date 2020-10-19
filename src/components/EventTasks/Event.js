import React from 'react';

const Event = (props) => {    
    const date = props.data.date;
    const task = props.data.task;
    return (
    <div className="col-md-6">
        <div className="event">
            <div className="event-image">
                <img className="" src="https://i.ibb.co/Y3Vfbfg/extra-Volunteer.png" alt=""/>
            </div>
            <div className="text">
                <h4 style={{textTransform: 'uppercase'}}>{task}</h4>
                <p className="date">{date}</p>
            </div>
            <div className="button">
                <button className="btn btn-secondary">Cancel</button>
            </div>
        </div>
    </div>
    );
};

export default Event;