import React from 'react';
import * as emailJS from 'emailjs-com';
import styled from 'styled-components';

const ContactUsContainer = styled.div`
    margin: 800px 0px;
    text-align: center;
`;

const SubHeader = styled.p`
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 40px;
    font-weight: bold;
`;

const Header = styled(SubHeader)`
    font-size: 50px;
`;

const Form = styled.form`
    text-align: initial;

`;

const Label = styled.label`
    font-size: 36px;
`;

const TextArea = styled.textarea`
    min-height: 425px;
    opacity: 0.4;

    &:focus{
        opacity: 1;
    }
`;

const Input = styled.input`
    min-height: 70px;
    opacity: 0.4;

    &:focus{
        opacity: 1;
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
`;


class ContactUs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            name: '',
            subject:'',
            message:''
        }
    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    handleSubjectChange = (event) => {
        this.setState({subject: event.target.value});
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    handleMessageChange = (event) => {
        this.setState({message: event.target.value});
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

        this.handleResetField();
    }

    handleResetField = () =>{
        this.setState({
            email: '',
            name: '',
            subject:'',
            message:''
        })
    }

    render(){
        return (
            <ContactUsContainer>
                <SubHeader>Got any questions?</SubHeader>
                <Header>Let's Chat</Header>
                <div className="container px-5">
                    <Form>
                        <div className="form-group">
                            <Label htmlFor="nameInput">Name</Label>
                            <Input type="text" className="form-control form-control-lg" value={this.state.name}id="nameInput" aria-describedby="nameInput" onChange = {(e) => this.handleNameChange(e)}/>
                        </div>
                        <div className="form-group mt-5">
                            <Label htmlFor="emailInput">Email</Label>
                            <Input type="email" className="form-control form-control-lg" id="emailInput" value={this.state.email} onChange={(e) => this.handleEmailChange(e)}/>
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
                            <Button type="submit" className="btn btn-primary" onClick={()=>this.handleSubmit()}>SUBMIT</Button>
                        </div>
                    </Form>
                </div>
            </ContactUsContainer>
        );
    }   
}

export default ContactUs;