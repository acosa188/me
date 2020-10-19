import React from 'react';
import profilePic from '../images/person-profile.png';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Intro.css';


const Intro = () => {
    return (
        <div className="introClass">
            <div className="jumbotron">
                <div className="row">
                    <div className="col">
                        <img src={profilePic} className="profileClass img-fluid" alt="animated profile" />
                    </div>
                    <div className="col">
                        <div className="d-flex flex-column">
                            <div className="logo-container img-fluid">
                                <svg id="diagonal-line" xmlns="http://www.w3.org/2000/svg" width="420.729" height="420.729" viewBox="0 0 401.759 468.544">
                                    <g id="Rectangle_1" data-name="Rectangle 1" transform="translate(0 34.648) rotate(-45)" fill="transparent" stroke="#E29126" strokeWidth="4">
                                        <rect width="49" height="546" stroke="none" />
                                        <rect x="1" y="1" width="47" height="544" fill="none" />
                                    </g>
                                </svg>
                                <div className="port-container">
                                    PORT
                                </div>
                                <div className="folio-container">
                                    FOLIO
                                </div>
                            </div>

                            <div className="name-container">
                                <div className="of-label-bg">    
                                </div>
                                <h2 className="of-label">OF</h2>
                                
                                <div className="name-label-bg">    
                                </div>
                                <h2 className="name-label">ARJUN COSARE</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;