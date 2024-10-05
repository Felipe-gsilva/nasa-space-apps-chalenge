import React, {useState} from "react";
import ReactDOM from "react-dom";
import ReactGlobe from "react-globe";

function Globe() {

    const markertext = [
        {id: 1, text: "O primeiro fator que define Cloju-1003 é sua atmosfera densa, que reflete grande parte da luz solar. Isso impede que a luz chegue às profundezas oceânicas, onde a maioria dos organismos vive. A atmosfera é rica em gases como metano e hidrogênio, além de elementos como ferro, criando um ambiente favorável à quimiossíntese, processo pelo qual organismos oxidam substâncias químicas para obter energia. A água e o solo são ricos em sulfatos e nitratos, fornecendo as bases químicas necessárias para a vida quimiossintética. Vulcões submarinos, ativos em todo o planeta, liberam compostos úteis, como sulfeto de hidrogênio, que são utilizados por organismos quimiossintéticos para converter energia química em energia biológica"},
        {id: 2, text: "texto"},
        {id: 3, text: "texto"},
        {id: 4, text: "texto"},
        {id: 5, text: "texto"},
        {id: 6, text: "texto"},
    
    ];
    const markers = [
        {
            id: '1',
            city: '',
            color: 'red',
            coordinates: [1.3521, 103.8198],
            value: 135,
        },
        {
            id: '2',
            city: 'New York',
            color: 'blue',
            coordinates: [40.73061, -73.935242],
            value: 135,
        },
        {
            id: '3',
            city: 'San Francisco',
            color: 'orange',
            coordinates: [37.773972, -122.431297],
            value: 135,
        },
        {
            id: '4',
            city: 'Beijing',
            color: 'gold',
            coordinates: [39.9042, 116.4074],
            value: 135,
        },
        {
            id: '5',
            city: 'London',
            color: 'green',
            coordinates: [51.5074, 0.1278],
            value: 135,
        },
        {
            id: '6',
            city: 'Los Angeles',
            color: 'gold',
            coordinates: [29.7604, -95.3698],
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
