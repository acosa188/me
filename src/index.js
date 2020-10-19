import React from 'react';
import ReactDOM from 'react-dom';

import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Qualification from './components/Qualification';
import Projects from './components/Projects';
import ContactUs from './components/ContactUs';

import './index.css';

function App(){
    return(
        <div className="appClass">
            <div className="container">
                <Intro />
            </div>
            <AboutMe />
            <Qualification />
            <Projects />
            <ContactUs />
        </div>
    );
}

ReactDOM.render(<App></App>, document.getElementById('root'));