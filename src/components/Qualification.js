import React from 'react';
import personDumpling from '../images/person-n-dumpling.png';
import githubLogo from '../images/github-brands.svg';
import linkedInLogo from '../images/linkedin-brands.svg';
import 'bootstrap/dist/css/bootstrap.css';

import styled from 'styled-components';

import '../css/Qualification.css';


const Header = styled.p`
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 40px;
    font-weight: bold;
    margin-top: 45px;

    @media (min-width: 1200px){
        font-size: 1.7rem;
    }

    @media (min-width: 1400px){
        font-size: 2.1rem;
    }

    @media (min-width: 1700px) {
        font-size: 2.2rem;
    }

    @media (min-width: 1910px){
        font-size: 2.5rem;
    }
`;

const RegularText = styled.p`
    font-size: 1.625rem;

    @media (min-width: 1200px){
        font-size: 1rem;
    }

    @media (min-width: 1400px){
        font-size: 1.1rem;
    }

    @media (min-width: 1700px) {
        font-size: 1.2rem;
    }

    @media (min-width: 1910px){
        font-size: 1.625rem;
    }
`;

const SubHeader = styled.p`
    font-size: 1.5rem;
    font-weight: 500;

    @media (min-width: 1200px){
        font-size: 0.9rem;
    }

    @media (min-width: 1400px){
        font-size: 1rem;
    }

    @media (min-width: 1700px) {
        font-size: 1.1rem;
    }

    @media (min-width: 1910px){
        font-size: 1.5rem;
    }
`;

const Link = styled.a`
    color: #06094C;
    text-decoration: none;

    &: hover{    
        color: #31ecf1;
    }
`;

const FullStackDevLabel = styled(Header)`
    margin-top: -150px;
    margin-left: 150px;

    @media (min-width: 1200px){
        margin-top: -100px;
        margin-left: 120px;
    }

    @media (min-width: 1910px){
        margin-top: -150px;
        margin-left: 150px;
    }
`;

const EmailLabel = styled(SubHeader)`
    margin-left: 150px;

    @media (min-width: 1200px){
        margin-left: 120px;
    }

    @media (min-width: 1910px){
        margin-left: 150px;
    }
`;

const SocialMediaLabel = styled(Header)`
    margin-left: 150px;

    @media (min-width: 1200px){
        margin-left: 120px;
    }

    @media (min-width: 1910px){
        margin-left: 150px;
    }
`;

const Qualification = () =>{
    return(
        <div className="qualificationClass">
            <div className="row">
                <div className="col-7">
                    {/* Education Section */}
                    <Header>Education</Header>
                    <RegularText>Bachelor of Science, 
                    <br></br>
                    Major in Computer Science</RegularText>

                    <div className="d-flex justify-content-between pr-5">
                        <SubHeader>University of Calgary</SubHeader>
                        <SubHeader>2016 - 2020</SubHeader>
                    </div>

                    <RegularText>Bachelor of Science, 
                    <br></br>
                    University Transfer</RegularText>

                    <div className="d-flex justify-content-between pr-5">
                        <SubHeader>Mount Royal University</SubHeader>
                        <SubHeader>2014 - 2016</SubHeader>
                    </div>

                    {/* Experience Section */}
                    <Header>Experience</Header>
                    <RegularText>Sofware Developer Internship </RegularText>

                    <div className="d-flex justify-content-between pr-5">
                        <SubHeader>H&R Block Canada Inc.</SubHeader>
                        <SubHeader>May 2018 - Sept 2019</SubHeader>
                    </div>

                    <RegularText>Sofware Developer Assistant</RegularText>

                    <div className="d-flex justify-content-between pr-5">
                        <SubHeader>University of Calgary</SubHeader>
                        <SubHeader>Jan 2018 - May 2018</SubHeader>
                    </div>

                    {/* Skills Section */}
                    <Header>Skills</Header>
                    <ul>
                        <li> C#, HTML, CSS, JavaScript</li>
                        <li>MySQL, SQL Server, Postgres, MongoDB</li>
                        <li>React, ReduxToolkit, NodeJS</li>
                        <li>ASP.NET Core, MVC, Razor</li>
                        <li>Git </li>
                        <li>Kanban, Scrum</li> 
                    </ul>
                </div>
                <div className="col-5">
                    <img src={personDumpling} className="img-fluid" alt="person and dumpling"></img>
                    <FullStackDevLabel>Full Stack Developer</FullStackDevLabel>
                    <EmailLabel>Email: arjun.cosare@gmail.com</EmailLabel>
                    <SocialMediaLabel className="mt-0 mt-lg-5">Social Media</SocialMediaLabel>
                    <div className="d-flex marginLeftFix socialMarginTopFix">
                        <Link href="https://github.com/acosa188" target="_blank" rel="noopener noreferrer" className="d-flex" style={{textDecoration:"none"}}>
                            <img src={githubLogo} alt="github logo"></img>
                            <SubHeader className="ml-2 mt-3">acosa188</SubHeader>
                        </Link>
                        <Link href="https://www.linkedin.com/in/arjun-cosare-350601154/" target="_blank" rel="noopener noreferrer" className="d-flex" style={{textDecoration:"none"}}>
                            <img src={linkedInLogo} alt="linkedin logo" className="ml-4"></img>
                            <SubHeader className="ml-2 mt-3">arjun cosare</SubHeader>
                        </Link>                     
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Qualification;