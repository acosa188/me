import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';



const ProjectPreviewContainer = styled.div`
    height: 900px;
    margin-top: 50px;
    margin-left: -300px;
    margin-right: -300px;
`;

const Preview = styled.div`
    height: 100%;
    background-image: url(${props => props.url || ""});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 5px;

    &:hover{
        opacity:0.8;
        cursor: pointer;
    }
`;

const ModalTitle = styled.p`
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 40px;
    font-weight: bold;
`;

const ModalDescription = styled.p`
    font-size: 26px;
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

const CodeButton = styled(Button)`
    color: black;
    border: 2px solid black;
    border-radius: 500px;
    width: 150px;
    text-align: center;
    background-color: transparent;

    &:hover{
        background-color: black;
        color: white;
    }
`;

const Loading = styled.div`
    margin-top: 200px;
    height: 100px;
    width: 100px;
`;

const ModalItem = (props) => {
    return (
        <div className="modal fade" id={props.id} data-keyboard="false" tabIndex="-1" aria-labelledby={`${props.id}Label`} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header" style={{ borderBottom: "none" }}>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid p-5">
                            <div className="row">
                                <div className="col-5">
                                    <img className="img-fluid" alt="project Logo" height="500px"
                                        src={
                                            `https://raw.githubusercontent.com/acosa188/${props.name}/master/src/images/thumbnail.jpg`
                                        }>
                                    </img>
                                </div>
                                <div className="col-7 pl-5">
                                    <ModalTitle>{props.name.replace('-', ' ')}</ModalTitle>
                                    <ModalDescription>{props.description}</ModalDescription>
                                    <div style={{ marginTop: "150px" }}>
                                        <a href={props.url} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                                            <CodeButton className="ml-auto">
                                                Code
                                            </CodeButton>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Modal = (props) => {
    return (
        <div>
            {
                props.top3Projects.length > 0 ?
                    <div>
                        <ModalItem
                            id="top1Modal"
                            name={props.top3Projects[0].name}
                            description={props.top3Projects[0].description}
                            url={props.top3Projects[0].html_url} />

                        <ModalItem
                            id="top2Modal"
                            name={props.top3Projects[1].name}
                            description={props.top3Projects[1].description}
                            url={props.top3Projects[1].html_url} />

                        <ModalItem
                            id="top3Modal"
                            name={props.top3Projects[2].name}
                            description={props.top3Projects[2].description}
                            url={props.top3Projects[2].html_url} />
                    </div> : <div></div>
            }

            {
                props.frontEndProjects.length === 1 ?
                <div>
                    <ModalItem
                        id="frontEnd1Modal"
                        name={props.frontEndProjects[0].name}
                        description={props.frontEndProjects[0].description}
                        url={props.frontEndProjects[0].html_url} />
                </div> : 
                props.frontEndProjects.length === 2 ?
                <div>
                    <ModalItem
                        id="frontEnd1Modal"
                        name={props.frontEndProjects[0].name}
                        description={props.frontEndProjects[0].description}
                        url={props.frontEndProjects[0].html_url} />

                    <ModalItem
                        id="frontEnd2Modal"
                        name={props.frontEndProjects[1].name}
                        description={props.frontEndProjects[1].description}
                        url={props.frontEndProjects[1].html_url} />
                </div> :
                props.frontEndProjects.length === 3 ?
                <div>
                    <ModalItem
                        id="frontEnd1Modal"
                        name={props.frontEndProjects[0].name}
                        description={props.frontEndProjects[0].description}
                        url={props.frontEndProjects[0].html_url} />

                    <ModalItem
                        id="frontEnd2Modal"
                        name={props.frontEndProjects[1].name}
                        description={props.frontEndProjects[1].description}
                        url={props.frontEndProjects[1].html_url} />

                    <ModalItem
                        id="frontEnd3Modal"
                        name={props.frontEndProjects[2].name}
                        description={props.frontEndProjects[2].description}
                        url={props.frontEndProjects[2].html_url} />
                </div>:
                <div></div>
            }

            {
                props.backEndProjects.length === 1 ?
                <div>
                    <ModalItem
                        id="backEnd1Modal"
                        name={props.backEndProjects[0].name}
                        description={props.backEndProjects[0].description}
                        url={props.backEndProjects[0].html_url} />
                </div> : 
                props.backEndProjects.length === 2 ?
                <div>
                    <ModalItem
                        id="backEnd1Modal"
                        name={props.backEndProjects[0].name}
                        description={props.backEndProjects[0].description}
                        url={props.backEndProjects[0].html_url} />

                    <ModalItem
                        id="backEnd2Modal"
                        name={props.backEndProjects[1].name}
                        description={props.backEndProjects[1].description}
                        url={props.backEndProjects[1].html_url} />
                </div> :
                props.backEndProjects.length === 3 ?
                <div>
                    <ModalItem
                        id="backEnd1Modal"
                        name={props.backEndProjects[0].name}
                        description={props.backEndProjects[0].description}
                        url={props.backEndProjects[0].html_url} />

                    <ModalItem
                        id="backEnd2Modal"
                        name={props.backEndProjects[1].name}
                        description={props.backEndProjects[1].description}
                        url={props.backEndProjects[1].html_url} />

                    <ModalItem
                        id="backEnd3Modal"
                        name={props.backEndProjects[2].name}
                        description={props.backEndProjects[2].description}
                        url={props.backEndProjects[2].html_url} />
                </div>:
                <div></div>
            }
            
        </div>
    );
}

const ProjectsPreview = (props) => {
    const { allActive, frontEndActive, backEndActive, top3Projects, frontEndProjects, backEndProjects } = props;

    return (
        <ProjectPreviewContainer>
            {
                allActive ?
                    <div className="h-100">
                        {
                            top3Projects.length > 0 ?
                                <div className="row h-100">
                                    <div className="col no-gutters">
                                        <div className="p-2 h-100">
                                            <Preview style={{ marginRight: "-25px" }} url={`https://raw.githubusercontent.com/acosa188/${top3Projects[0].name}/master/src/images/thumbnail.jpg`} data-toggle="modal" data-target="#top1Modal"
                                            />
                                        </div>
                                    </div>
                                    <div className="col no-gutters">
                                        <div className="d-flex flex-column h-100">
                                            <Preview url={`https://raw.githubusercontent.com/acosa188/${top3Projects[1].name}/master/src/images/thumbnail.jpg`} className="m-2"
                                                data-toggle="modal" data-target="#top2Modal" />
                                            <Preview url={`https://raw.githubusercontent.com/acosa188/${top3Projects[2].name}/master/src/images/thumbnail.jpg`} className="m-2"
                                                data-toggle="modal" data-target="#top3Modal" />
                                        </div>
                                    </div>
                                </div> :
                                <div className="d-flex justify-content-center">
                                    <Loading className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </Loading>
                                </div>
                        }
                    </div>
                    :
                    frontEndActive ?
                        <div className="h-100">
                            {frontEndProjects.length === 1 ?
                                <div className="row h-100">
                                    <div className="col">
                                        {
                                            <Preview url={`https://raw.githubusercontent.com/acosa188/${frontEndProjects[0].name}/master/src/images/thumbnail.jpg`}
                                                data-toggle="modal" data-target="#frontEnd1Modal" />
                                        }

                                    </div>
                                </div> :
                                frontEndProjects.length === 2 ?
                                    (<div className="row h-100">
                                        <div className="col">
                                            <Preview url={`https://raw.githubusercontent.com/acosa188/${frontEndProjects[0].name}/master/src/images/thumbnail.jpg`}
                                                data-toggle="modal" data-target="#frontEnd1Modal" />
                                        </div>
                                        <div className="col">
                                            <Preview url={`https://raw.githubusercontent.com/acosa188/${frontEndProjects[1].name}/master/src/images/thumbnail.jpg`}
                                                data-toggle="modal" data-target="#frontEnd2Modal" />
                                        </div>
                                    </div>
                                    ) :
                                    frontEndProjects.length === 3 ?
                                    <div className="row h-100">
                                        <div className="col no-gutters">
                                            <div className="p-2 h-100">
                                                <Preview style={{ marginRight: "-25px" }} url={`https://raw.githubusercontent.com/acosa188/${frontEndProjects[0].name}/master/src/images/thumbnail.jpg`} data-toggle="modal" data-target="#frontEnd1Modal"
                                                />
                                            </div>
                                        </div>
                                        <div className="col no-gutters">
                                            <div className="d-flex flex-column h-100">
                                                <Preview url={`https://raw.githubusercontent.com/acosa188/${frontEndProjects[1].name}/master/src/images/thumbnail.jpg`} className="m-2"
                                                    data-toggle="modal" data-target="#frontEnd2Modal" />
                                                <Preview url={`https://raw.githubusercontent.com/acosa188/${frontEndProjects[2].name}/master/src/images/thumbnail.jpg`} className="m-2"
                                                    data-toggle="modal" data-target="#frontEnd3Modal" />
                                            </div>
                                        </div>
                                    </div> : 
                                    <div className="d-flex justify-content-center">
                                        <Loading className="spinner-border" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </Loading>
                                    </div>
                            }
                        </div> :
                        backEndActive ?
                            <div className="h-100 backend">
                                {backEndProjects.length === 1 ?
                                    <div className="row h-100">
                                        <div className="col">
                                            {
                                                <Preview url={`https://raw.githubusercontent.com/acosa188/${backEndProjects[0].name}/master/src/images/thumbnail.jpg`}
                                                    data-toggle="modal" data-target="#backEnd1Modal" />
                                            }

                                        </div>
                                    </div> :
                                    backEndProjects.length === 2 ?
                                        (<div className="row h-100">
                                            <div className="col">
                                                <Preview url={`https://raw.githubusercontent.com/acosa188/${backEndProjects[0].name}/master/src/images/thumbnail.jpg`}
                                                    data-toggle="modal" data-target="#backEnd1Modal" />
                                            </div>
                                            <div className="col">
                                                <Preview url={`https://raw.githubusercontent.com/acosa188/${backEndProjects[1].name}/master/src/images/thumbnail.jpg`}
                                                    data-toggle="modal" data-target="#backEnd2Modal" />
                                            </div>
                                        </div>
                                        ) :
                                        backEndProjects.length === 3 ?
                                        <div className="row h-100">
                                            <div className="col no-gutters">
                                                <div className="p-2 h-100">
                                                    <Preview style={{ marginRight: "-25px" }} url={`https://raw.githubusercontent.com/acosa188/${backEndProjects[0].name}/master/src/images/thumbnail.jpg`} data-toggle="modal" data-target="#backEnd1Modal"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col no-gutters">
                                                <div className="d-flex flex-column h-100">
                                                    <Preview url={`https://raw.githubusercontent.com/acosa188/${backEndProjects[1].name}/master/src/images/thumbnail.jpg`} className="m-2"
                                                        data-toggle="modal" data-target="#backEnd2Modal" />
                                                    <Preview url={`https://raw.githubusercontent.com/acosa188/${backEndProjects[2].name}/master/src/images/thumbnail.jpg`} className="m-2"
                                                        data-toggle="modal" data-target="#backEnd3Modal" />
                                                </div>
                                            </div>
                                        </div>:
                                        <div className="d-flex justify-content-center">
                                            <Loading className="spinner-border" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </Loading>
                                        </div>
                                }
                            </div> :
                            <div></div>
            }
            <Modal top3Projects={top3Projects}
                frontEndProjects={frontEndProjects}
                backEndProjects={backEndProjects}></Modal>
        </ProjectPreviewContainer>
    );
}

export default ProjectsPreview;