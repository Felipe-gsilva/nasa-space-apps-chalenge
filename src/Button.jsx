import React from 'react';

function Button ({ setRenderGlobe, setRenderDetails  }) {
  return (
    <button
            className="blue-button"
            onClick={() => { 
                setRenderGlobe(true); 
                setRenderDetails(false); 
            }}>
            Discover Cloju-1003
    </button>
  );
}

export default Button;
