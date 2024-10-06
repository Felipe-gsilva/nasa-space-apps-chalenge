import React, {useState} from "react";
import ReactDOM from "react-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Globe from "./Globe.jsx"
import Button from "./Button.jsx"
import WhiteButton from "./WhiteButton.jsx"
import Logo from "./Logo.jsx"
import Card from "./Card.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/output.css'

function App() {
    const [renderGlobe, setRenderGlobe] = useState(false)
    const [renderDetails, setRenderDetails] = useState(true)
    const [renderPage, setRenderPage] = useState(false)

    return (
        <div className="mainClass" >
            <Navbar expand="lg" className="Navbar shadow-div">
                <Container>
                    <Navbar.Brand onClick={()=> {
                                setRenderGlobe(false)
                                setRenderPage(false)
                                setRenderDetails(true)
                            }} className="text-white clickable">Cloju-1003</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ">
                            <Nav.Link onClick={()=> {
                                setRenderGlobe(false)
                                setRenderPage(false)
                                setRenderDetails(true)
                            }} className="text-white">Home</Nav.Link>
                            <Nav.Link onClick={()=> {
                                setRenderGlobe(true)
                                setRenderDetails(false)
                                setRenderPage(false)
                            }} className="text-white">Discover the world</Nav.Link>
                            <Nav.Link onClick={()=> {
                                setRenderGlobe(false)
                                setRenderDetails(false)
                                setRenderPage(true)
                            }} className="text-white">Read More</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {renderGlobe &&
                <div className="Globe">
                    <Globe />
                </div>}
            {renderDetails && !renderGlobe &&
                <div className="bg main" >
                    <Logo />
                    <div className="buttons">
                        <Button setRenderGlobe={setRenderGlobe} />
                        <WhiteButton setRenderPage={setRenderPage} setRenderDetails={setRenderDetails} />
                    </div>
                </div> }
            {renderPage && !renderGlobe && 
                <div className="bg main">
                    <div className="margin-top"> </div>
                    <div className="cards"> 
                        <Card 
                            title="Planet Overview" 
                            description=<ul>
                                <li>45% Methane (CH₄)</li>
                                <li>20% Carbon Dioxide (CO₂) </li>
                                <li>15% Hydrogen (H₂)</li>
                                <li>10% Nitrogen (N₂) </li>
                                <li>5% Hydrogen Sulfide (H₂S) </li>
                            </ul>
                        />
                        <Card 
                            title="Ecosystem"
                            description=<ul>
                                <li>chemosynthetic organisms</li>
                                <li>Iron-oxidizing bacteria</li>
                                <li> Hydrogen sulfide-oxidizing bacteria </li>
                                <li> Methanotrophic archaea </li>
                            </ul>
                        />
                    </div>
                    <div className="cards">
                        <Card 
                            title="Biological Adaptations"
                            description=<ul>
                                <li>Organisms are adapted to extremely high pressures in the deep oceans and to extreme temperatures near hydrothermal vents.</li>
                                <li> Their cell membranes are reinforced to withstand the pressure, and they have specially designed enzymes that function in very high temperatures. </li>
                            </ul>
                        />
                        <Card 
                            title="Energy Source"
                            description=<ul>
                                <li>Chemosynthesis: Life on Lavinia depends on chemosynthetic processes that use the energy from chemical reactions, such as the oxidation of sulfur compounds, iron, and methane.</li>
                                <li> Geothermal Energy: Heat released by hydrothermal vents serves as a key source of thermal energy for many organisms. </li>
                            </ul>
                        />
                    </div>
                    <div className="cards">
                      <Card 
                            title="Nutrient Cycle"
                            description=<ul>
                                <li>
                                Sulfur and nitrogen cycles are the primary nutrient recycling systems on Lavinia.
                            </li>
                            <li> 
                                Sulfur compounds, like hydrogen sulfide, are continuously oxidized and recycled by chemosynthetic organisms.
                            </li>
                            <li>
                                The nitrogen cycle is maintained by nitrifying bacteria that convert ammonia into nitrates.
                            </li>
                            </ul>
                        />
                        <Card 
                            title="Food Chain - Chemosynthesis-Based"
                            description=<ul>
                                <li>At the base are chemolithotrophs, organisms that obtain energy directly from the oxidation of inorganic compounds. </li>
                                <li>Larger organisms, such as symbiotic invertebrates, either directly consume the chemolithotrophs or benefit from the energy produced by symbiotic bacteria.</li>
                                <li>Decomposers: Organisms that use fermentation to break down organic matter, closing the nutrient cycle.</li>
                            </ul>
                        />
                    </div>
                </div>}
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
