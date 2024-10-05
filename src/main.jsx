import React, {useState} from "react";
import ReactDOM from "react-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Globe from "./Globe.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [renderGlobe, setRenderGlobe] = useState(true)
    return (
        <div className="mainClass" >
            <Navbar expand="lg" className="Navbar shadow-div ">
                <Container>
                    <Navbar.Brand href="#home">Cloju-1003</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ">
                            <Nav.Link href="#home"className="text-white">Home</Nav.Link>
                            <Nav.Link href="#link"className="text-white">Discover the world</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {renderGlobe &&
                <div className="Globe">
                    <Globe />
                </div>}
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
