import React, {useState} from "react";
import ReactDOM from "react-dom";
import ReactGlobe from "react-globe";

function Globe() {

    const markertext = [
        {id: 1, text: "The first factor that defines Cloju-1003 is its dense atmosphere, which reflects a large portion of sunlight. This prevents light from reaching the ocean depths, where most organisms live. The atmosphere is rich in gases such as methane and hydrogen, as well as elements like iron, creating an environment favorable to chemosynthesis, the process by which organisms oxidize chemical substances to obtain energy. Water and soil are rich in sulfates and nitrates, providing the necessary chemical foundations for chemosynthetic life. Submarine volcanoes, active throughout the planet, release useful compounds such as hydrogen sulfide, which are used by chemosynthetic organisms to convert chemical energy into biological energy."},
        {id: 2, text: "Unlike traditional terrestrial ecosystems, where the photosynthesis of plants and algae is the primary energy pathway, the ecosystem of Cloju-1003 is sustained by chemoautotrophic organisms. These organisms oxidize elements like iron and sulfur present in the environment to obtain energy. For example, bacteria specialized in oxidizing iron or hydrogen sulfide are abundant, taking advantage of the chemical compounds released by submarine volcanoes. These organisms form the base of the food chain, playing a role equivalent to that of plants on Earth."},
        {id: 3, text: " The organisms that live in Cloju-1003 have developed extraordinary adaptations to survive the planet's extreme conditions. The high pressure in the depths of the oceans and extreme temperatures, often around hydrothermal vents, require unique physiological adaptations. Both chemosynthetic organisms and the consumers that depend on them are highly resistant to extreme temperature variations, with cell membranes and proteins that withstand intense heat and pressure. Additionally, many species have established symbiotic relationships to maximize their survival. For example, there are organisms that, through specialized adaptations like tentacles, absorb nutrients directly from chemosynthetic bacteria. These bacteria live within the tissues of their hosts, producing energy for both. These interactions are essential for life on Cloju-1003, as the available energy is scarce and difficult to obtain. Symbiosis ensures an efficient exchange of resources and mutual survival, forming the basis of many food chains on the planet. "},
        {id: 4, text: " Another important aspect of the ecology of Cloju-1003 is the presence of decomposer organisms that use the fermentation of organic substrates to generate their own energy. These organisms play a crucial role in the nutrient cycle, decomposing dead organic matter and releasing compounds that can be reused by chemosynthetic organisms. This creates a closed energy cycle, essential for sustaining the ecosystem in an environment where resources are limited. The food chains of Cloju-1003, therefore, are based on chemosynthetic organisms, which are consumed by larger organisms, which in turn are preyed upon by others. At the top of these food chains may be organisms that indirectly depend on chemosynthesis, living in high-pressure, high-heat environments and harnessing the energy that flows through the ecosystem. "},
        {id: 5, text: "The resilience of the Cloju-1003 ecosystem is largely ensured by the complex symbiotic relationships that have developed over time. Chemosynthetic organisms form partnerships with larger species that have developed special adaptations, such as tentacles and body cavities, to house the chemosynthetic bacteria. In return, these bacteria provide essential nutrients for their hosts. Symbiosis is fundamental in Cloju-1003, as it optimizes the use of the scarce chemical resources available, allowing species to survive in extreme conditions of temperature, pressure, and energy availability."},
    
    ];
    const markers = [
        {
            id: '1',
            city: ' Extreme Environmental Conditions ',
            color: 'red',
            coordinates: [1.3521, 103.8198],
            value: 135,
        },
        {
            id: '2',
            city: 'Ecosystem Based on Chemosynthesis',
            color: 'blue',
            coordinates: [40.73061, -73.935242],
            value: 135,
        },
        {
            id: '3',
            city: 'Adaptations of Organisms to Life in Cloju-1003',
            color: 'orange',
            coordinates: [37.773972, -122.431297],
            value: 135,
        },
        {
            id: '4',
            city: 'Food Chains and Fermentation',
            color: 'gold',
            coordinates: [39.9042, 116.4074],
            value: 135,
        },
        {
            id: '5',
            city: 'Symbiotic Relationships and Ecological Resilience',
            color: 'green',
            coordinates: [51.5074, 0.1278],
            value: 135,
        },
    ];


    const options = {
        ambientLightColor: 'blue',
        cameraRotateSpeed: 0.8,
        focusAnimationDuration: 1200,
        focusEasingFunction: ['Linear', 'None'],
        pointLightColor: 'white',
        pointLightIntensity: 1.5,
        globeGlowColor: 'blue',
        markerTooltipRenderer: marker => `${marker.city}`,
    };

    const [globe, setGlobe] = useState(null);
    const [marker, setMarker] = useState(null);
    const [hidden, setHidden] = useState(false);

    const fixedDivStyle = {
        position: 'fixed',
        top: '30%',
        right: '30%',
        left: '30%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '10px',
        borderRadius: '8px',
        zIndex: 1000,
    };

    const getTextById = (id) => {
        const marker = markertext.find(marker => marker.id === id);
        return marker ? marker.text : "Text not found";
    };

    console.log(hidden);
    return (
        <div>
            <ReactGlobe 
                height="100vh" 
                width="100vw"
                globeTexture="/globe.jpg" 
                options={options} 
                markers={markers}
                onClickMarker={(e) => {
                    setMarker(e)
                    setHidden(true)
                }}
                onClickGlobe={setHidden}
                onGetGlobe={setGlobe}
                onDefocus={()=> {
                    setHidden(false)
                }}

                onMouseOutMarker={(marker, markerObject, event) => console.log(marker, markerObject, event)}
                onGlobeTextureLoaded={() => console.log('globe loaded')}
            />

            {marker && hidden && (
                <div style={fixedDivStyle}>
                    <h3>{marker.city}</h3>
                    <p>{getTextById(parseInt(marker.id))}</p>
                </div>
            )}
        </div>
    );
}

export default Globe;
