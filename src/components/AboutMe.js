import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

const AboutMeContainer = styled.div`
    margin-top: 400px;
    width: 39.375rem;
    min-height: 31.9375rem;

    @media (min-width: 1200px){
        margin-top: 200px;
    }

    @media (min-width: 1400px) {
        margin-top: 300px;
    }

    @media (min-width: 1700px) {
        margin-top: 450px;
    }

    @media (min-width: 1910px) {
        width: 39.375rem;
        min-height: 31.9375rem;
    }
`;

const HeadingLabel = styled.p`
    width: 500px;
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 2.5rem;
    font-weight: bold;

    @media (min-width: 1200px){
        font-size: 1.7rem;
        width: 340px;
    }

    @media (min-width: 1400px) {
        font-size: 2.1rem;
        width: 400px;
    }

    @media (min-width: 1700px) {
        font-size: 2rem;
        width: 440px;
    }

    @media (min-width: 1910px){
        width: 500px;
        font-size: 2.5rem;
    }
`;

const Information = styled.p`
    font-size: 1.625rem;
    
    @media (min-width: 1200px){
        font-size: 1rem;
        width: 350px;
    }

    @media (min-width: 1400px) {
        font-size: 1.1rem;
        width: 450px;
    }

    @media (min-width: 1700px) {
        font-size: 1.2rem;
        width: 450px;
    }

    @media (min-width: 1910px){
        font-size: 1.625rem;
        width: 550px;
    }
`;

const HorizontalLine = styled.hr`
    position: absolute;
    top: 280px;
    left: 0;

    margin-left: -85px;

    width: 200px;
    transform: rotate(270deg);
    border-top: 3px solid #707070;

    @media (min-width: 1200px){
        left: 53px;
        top: 180px;
        width: 100px;
    }

    @media (min-width: 1400px) { 
        top: 210px;
        width: 120px;
    }

    @media (min-width: 1700px) {
        left: 40px;
        top: 230px;
        width: 150px;
    }

    @media (min-width: 1910px){
        position: absolute;
        top: 280px;
        left: 0;

        margin-left: -85px;

        width: 200px;
        transform: rotate(270deg);
        border-top: 3px solid #707070;
    }
`;

const Aside = styled.div`
    position: relative;
    padding: 15px;
`;

const Content = styled.div`
    position: absolute;
    left: 80px;
`;

const AboutMeLabel = styled.p`
    position: absolute;
    top: 75px;
    left: 0;
    font-size: 2.1875rem;
    font-weight: 500;
    color: #707070;
    transform: rotate(270deg);
    transform-origin: (0 0);
    margin-left: -60px;

    @media (min-width: 1200px){
        left: 20px;
        top: 55px;
        font-size: 1.7rem;
    }

    @media (min-width: 1400px) {
        font-size: 1.9rem;
        top: 60px;
    }

    @media (min-width: 1700px) {
        left: 20px;
        top: 65px;
        font-size: 2rem;
    }

    @media (min-width: 1910px){
        position: absolute;
        top: 75px;
        left: 0;
        font-size: 2.1875rem;
        font-weight: 500;
        color: #707070;
        transform: rotate(270deg);
        transform-origin: (0 0);
        margin-left: -60px;
    }
`;

const AboutMe = () => {
    return(
        <AboutMeContainer>
            <Aside>
                <HorizontalLine></HorizontalLine>
                <AboutMeLabel>about me</AboutMeLabel>

                <Content>
                    <HeadingLabel>
                        Need any help creating web application?
                        <br></br>
                        I can help you!
                    </HeadingLabel>
                    <Information>
                        I recently graduated in the field of computer science and did a year of internship at H & R Block. I got the chance to work on their applications both front-end and back-end side. During that time, I learned different technologies like React, Redux, and ASP.NET Core.
                        
                    </Information>
    
                    <Information>
                        Lately, I have been creating applications using React, ReduxToolkit, and NodeJS.
                    </Information>
                </Content>
            </Aside> 
        </AboutMeContainer>

    );
}

export default AboutMe;