import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ProjectsPreview from './ProjectsPreview';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Projects.css'

const ProjectContainer = styled.div`
    margin-top: 1400px;

    @media (min-width: 1200px){
        margin-top: 850px;
    }

    @media (min-width: 1400px) {
        margin-top: 1100px;
    }

    @media (min-width: 1700px) {
        margin-top: 1250px;
    }

    @media (min-width: 1910px){
        margin-top: 1400px;
    }
`;

const Header = styled.p`
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 40px;
    font-weight: bold;
    margin-top: 45px;
    color: white;

    @media (min-width: 1200px){
        font-size: 1.7rem;
    }

    @media (min-width: 1400px) {
        font-size: 2.1rem;
    }

    @media (min-width: 1700px) {
        font-size: 2.2rem;
    }

    @media (min-width: 1910px){
        font-size: 2.5rem;
    }
`;

const Qoute = styled.p`
    font-size: 26px;
    color: white;
    width: 1200px;

    @media (min-width: 1200px){
        font-size: 1rem;
        width: 700px;
    }

    @media (min-width: 1400px) {
        font-size: 1.1rem;
    }

    @media (min-width: 1700px) {
        font-size: 1.2rem;
        width: 900px;
    }

    @media (min-width: 1910px){
        font-size: 1.625rem;
    }
`;

const Button = styled.div`
    margin-top: 45px;
    margin-bottom: 16px;
    padding: 11px 40px;
    border-radius: 5px;
    font-size: 26px;
    color: white;
    background-color: #121C26;

    &:hover{
        background-color: #121c26b7;
        cursor: pointer;
    }
`;

const NavItems = styled.div`
    font-size: 30px;
    font-weight: 500;
    color: ${props => props.active ? "#E29126" : "white"};
    padding-bottom: 5px;
    border-bottom: ${props => props.active ? "3px solid #E29126" : "none"};

    &:hover{
        cursor: pointer;
    }

    @media (min-width: 1200px){
        font-size: 1.3rem;
    }

    @media (min-width: 1400px) {
        font-size: 1.4rem;
    }

    @media (min-width: 1700px) {
        font-size: 1.6rem;
    }

    @media (min-width: 1910px){
        font-size: 1.875rem;
    }
`;


class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            top3Projects: [],
            frontEndProjects: [],
            backEndProjects: [],
            allToggle: true,
            frontEndToggle: false,
            backEndToggle: false
        }
    }

    pullGitProjects = async () => {
        let api = axios.create({
            baseURL: 'https://api.github.com/',
            timeout: 1000,
            headers: { 'Accept': 'application/vnd.github.v3+json' }
        });

        let res = await api.get('users/acosa188/repos');

        let localTop3Projects = [];
        let localFrontEndProject = [];
        let localBackEndProjects = [];

        for (const project of res.data) {

            // Check if project is assigned to be in the top 3 projects
            res = await api.get(`repos/acosa188/${project.name}/topics`,
                {
                    headers: {
                        'Accept': 'application/vnd.github.mercy-preview+json'
                    }
                })


            if (res.data.names.includes('top3')) {
                localTop3Projects.push(project);
            }

            if (res.data.names.includes('frontend')) {
                localFrontEndProject.push(project);
            }

            if(res.data.names.includes('backend')){
                localBackEndProjects.push(project);
            }
        };

        this.setState({ top3Projects: localTop3Projects });
        this.setState({ frontEndProjects: localFrontEndProject });
        this.setState({ backEndProjects: localBackEndProjects });

    }

    handleAllToggle = () => {
        this.setState({allToggle: true});
        this.setState({frontEndToggle: false});
        this.setState({backEndToggle: false});

    }

    handleFrontEndToggle = () => {
        this.setState({allToggle: false});
        this.setState({frontEndToggle: true});
        this.setState({backEndToggle: false});
    }

    handleBackEndToggle = () => {
        this.setState({allToggle: false});
        this.setState({frontEndToggle: false});
        this.setState({backEndToggle: true});
    }

    componentDidMount() {
        this.pullGitProjects();
    }

    render() {
        return (
            <ProjectContainer>
                <div className="d-flex justify-content-between">
                    <Header>Introduce My Projects</Header>     

                    {/* {<Button>All Projects</Button>} */}
                </div>

                <Qoute>I help create and maintain software for users. Application will be tailor-made according to the requirements of the clients.</Qoute>

                <div className="d-flex mt-5">
                    <NavItems className="mr-5" onClick={() => this.handleAllToggle()} active={this.state.allToggle}>
                        All
                    </NavItems>
                    <NavItems className="mr-5" onClick={() => this.handleFrontEndToggle()} active={this.state.frontEndToggle}>
                        Front End
                    </NavItems>
                    <NavItems className="mr-5" onClick={() => this.handleBackEndToggle()} active={this.state.backEndToggle}>
                        Back End
                    </NavItems>
                </div>
                
                <ProjectsPreview 
                    allActive={this.state.allToggle} 
                    frontEndActive={this.state.frontEndToggle}
                    backEndActive={this.state.backEndToggle}
                    top3Projects={this.state.top3Projects} 
                    frontEndProjects={this.state.frontEndProjects} 
                    backEndProjects={this.state.backEndProjects}
                />
                


            </ProjectContainer>
        );
    }
}

export default Projects;