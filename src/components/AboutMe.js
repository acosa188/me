import React from 'react';
import styled from 'styled-components';

const AboutMeContainer = styled.div`
    margin-top: 1020px;
    width: 630px;
    min-height: 511px;
`;

const HeadingLabel = styled.p`
    width: 500px;
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 40px;
    font-weight: bold;
`;

const Information = styled.p`
    font-size: 26px;
`;

const HorizontalLine = styled.hr`
    position: absolute;
    top: 280px;
    left: 0;

    margin-left: -85px;

    width: 200px;
    transform: rotate(270deg);
    border-top: 3px solid #707070;
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
    font-size: 35px;
    font-weight: 500;
    color: #707070;
    transform: rotate(270deg);
    transform-origin: (0 0);
    margin-left: -60px;
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