import React from 'react';
import fakeData from '../../FakeData';
import Activity from '../Activity/Activity';
import Nav from '../nav/Nav';

const Landing = () => {
    return (
        <div className="container">
        <div className="row">
          <div className="col-md-12">
          <Nav></Nav>

          <div className="hero-area">
                <h1>I grow by helping people in need.</h1>

                <div className="form-box">
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                </form>
                </div>

            </div>

            <div className="activity">
                <div className="row">
                    {
                        fakeData.map(data =>
                            <div className="col-md-6 col-lg-4 col-xl-4 col-sm-12 col-12">
                                <Activity color ={data.color} name ={data.name} image={data.img}></Activity>
                            </div>)
                    }
                                     
                </div>
                
            </div>
          </div>
        </div>        
      </div>
    );
};

export default Landing;