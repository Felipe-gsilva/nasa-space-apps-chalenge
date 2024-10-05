import React, {useState} from "react";
import ReactDOM from "react-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Globe from "./Globe.jsx"
import Button from "./Button.jsx"
import Logo from "./Logo.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [renderGlobe, setRenderGlobe] = useState(false)
    const [renderDetails, setRenderDetails] = useState(true)

    return (
        <div className="mainClass" >
            <Navbar expand="lg" className="Navbar shadow-div">
                <Container>
                    <Navbar.Brand onClick={()=> {
                                setRenderGlobe(false)
                                setRenderDetails(true)
                            }} className="text-white clickable">Cloju-1003</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ">
                            <Nav.Link onClick={()=> {
                                setRenderGlobe(false)
                                setRenderDetails(true)
                            }} className="text-white">Home</Nav.Link>
                            <Nav.Link onClick={()=> {
                                setRenderGlobe(true)
                                setRenderDetails(false)
                            }} className="text-white">Discover the world</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {renderGlobe &&
                <div className="Globe">
                    <Globe />
                </div>}
            {renderDetails &&
                <div className="bg main" >
                    <Logo />
                    <Button setRenderGlobe={setRenderGlobe} />
                </div>
            }
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
