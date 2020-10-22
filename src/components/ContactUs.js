import React from 'react';
import * as emailJS from 'emailjs-com';
import { connect } from 'react-redux';
import { messageVisToggleActionCreator } from '../store/websiteState';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';


const ContactUsContainer = styled.div`
    margin-top: 400px;
    margin-bottom: 100px;
    text-align: center;

    @media (min-width: 1200px){
        margin-top: 180px;
    }

    @media (min-width: 1700px){
        margin-top: 280px;
    }
    @media (min-width: 1910px){
        margin-top: 400px;
    }
`;

const SubHeader = styled.p`
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 40px;
    font-weight: bold;

    @media (min-width: 1200px){
        font-size: 1.7rem;
    }
    @media (min-width: 1400px){
        font-size: 2.1rem;
    }
    @media (min-width: 1700px){
        font-size: 2.2rem;
    }
    @media (min-width: 1910px){
        font-size: 2.5rem;
    }
`;

const Header = styled(SubHeader)`
    font-size: 50px;

    @media (min-width: 1200px){
        font-size: 2.3rem;
    }
    @media (min-width: 1400px){
        font-size: 2.6rem;
    }
    @media (min-width: 1700px){
        font-size: 2.7rem;
    }
    @media (min-width: 1910px){
        font-size: 3.125rem;
    }
`;

const Form = styled.form`
    text-align: initial;

`;

const Label = styled.label`
    font-size: 36px;

    @media (min-width: 1200px){
        font-size: 1.3rem;
    }
    @media (min-width: 1400px){
        font-size: 1.6rem;
    }
    @media (min-width: 1700px){
        font-size: 1.7rem;
    }
    @media (min-width: 1910px){
        font-size: 2.25rem;
    }
`;

const TextArea = styled.textarea`
    min-height: 425px;
    opacity: 0.6;

    &:focus{
        opacity: 1;
    }

    @media (min-width: 1200px){
        min-height: 250px;
    }
    @media (min-width: 1400px){
        min-height: 350px;
    }
    @media (min-width: 1700px){
        min-height: 425px;
    }

`;

const Input = styled.input`
    min-height: 70px;
    opacity: 0.6;

    &:focus{
        opacity: 1;
    }

    @media (min-width: 1200px){
        min-height: 50px;
    }

    @media (min-width: 1700px){
        min-height: 70px;
    }

`;

const Button = styled.div`
    padding: 11px 30px;
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 30px;
    font-weight: bold;
    color: black;
    background-color: #E29126;
    border:none;
    margin-top: 40px;

    @media (min-width: 1200px){
        font-size: 1.2rem;
    }

    @media (min-width: 1400px){
        font-size: 1.4rem;
    }
    @media (min-width: 1700px){
        font-size: 1.875rem;
    }

`;


class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            subject: '',
            message: ''
        }
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    }

    handleSubjectChange = (event) => {
        this.setState({ subject: event.target.value });
    }

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    handleMessageChange = (event) => {
        this.setState({ message: event.target.value });
    }

    handleSubmit = () => {
        let variables = {
            message: this.state.message,
            from_name: this.state.name,
            from_email: this.state.email,
            to_name: process.env.REACT_APP_EMAILJS_EMAILID,
            subject: this.state.subject
        }

         emailJS.send(
              'gmail', process.env.REACT_APP_EMAILJS_TEMPLATEID, variables, 
              process.env.REACT_APP_EMAILJS_USERID
         ).then(res => {
              console.log('Email Successfully Sent!')
          }).catch(err => {
              console.log(`Email Failed to Send!`, err)
         });

        this.handleToast();
        this.handleResetField();
    }

    handleToast = () => {
        this.props.messageToggle(true);
        window.setTimeout(()=>{
            this.props.messageToggle(false)
          },2000)
    }

    handleResetField = () => {
        this.setState({
            email: '',
            name: '',
            subject: '',
            message: ''       
        })
    }

    render() {
        return (
            <ContactUsContainer>
                <SubHeader>Got any questions?</SubHeader>
                <Header>Let's Chat</Header>
                <div className="container px-5">
                    <Form>
                        <div className="form-group">
                            <Label htmlFor="nameInput">Name</Label>
                            <Input type="text" className="form-control form-control-lg" value={this.state.name} id="nameInput" aria-describedby="nameInput" onChange={(e) => this.handleNameChange(e)} />
                        </div>
                        <div className="form-group mt-5">
                            <Label htmlFor="emailInput">Email</Label>
                            <Input type="email" className="form-control form-control-lg" id="emailInput" value={this.state.email} onChange={(e) => this.handleEmailChange(e)} />
                        </div>
                        <div className="form-group mt-5">
                            <Label htmlFor="subjectInput">Subject</Label>
                            <Input type="text" className="form-control form-control-lg" id="subjectInput" value={this.state.subject} onChange={(e) => this.handleSubjectChange(e)} />
                        </div>
                        <div className="form-group mt-5">
                            <Label htmlFor="messageInput">Message</Label>
                            <TextArea type="text" className="form-control form-control-lg" id="messageInput" value={this.state.message} onChange={(e) => this.handleMessageChange(e)} />
                        </div>
                        <div className="d-flex justify-content-center">
                            <Button type="submit" className="btn btn-primary" onClick={() => this.handleSubmit()}>SUBMIT</Button>
                        </div>
                    </Form>
                </div>
                
            </ContactUsContainer>
        );
    }
}

const mapDispatchToProps = () => {
    return{
        messageToggle: messageVisToggleActionCreator
    }
}

export default connect(null, mapDispatchToProps())(ContactUs);