import React, {useState} from "react";
import ReactDOM from "react-dom";
import ReactGlobe from "react-globe";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Globe from "./Globe.jsx"

function App() {
    const [renderGlobe, setRenderGlobe] = useState(true)
    return (
        <div className="mainClass" >
            <Navbar expand="lg" className="Navbar shadow-div">
                <Container>
                    <Navbar.Brand href="#home">Cloju-1003</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Discover the world</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
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
