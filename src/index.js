import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';

import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Qualification from './components/Qualification';
import Projects from './components/Projects';
import ContactUs from './components/ContactUs';
import MessageToast from './components/MessageSent';

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
            <MessageToast />
        </div>
    );
}

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>, 
    document.getElementById('root')
);