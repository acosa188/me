import React from "react";
import { connect } from "react-redux";
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import styled from 'styled-components';


const MessageSentContainer = styled.div`
    margin-top: 100px;
    margrin-bottom: 200px;
    position: relative;
`;

class MessageSent extends React.Component {
    render() {
        return (
            <MessageSentContainer>
                <Toast isOpen={this.props.messageToggle} style={{position:"absolute", bottom: "0", left: "0", width:"300px"}}>
                    <ToastHeader icon="success">Success</ToastHeader>
                    <ToastBody>
                        Message Sent!
                    </ToastBody>
                </Toast>
            </MessageSentContainer>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        messageToggle: state.web.messageSentToast
    }
}

export default connect(mapStateToProps)(MessageSent);