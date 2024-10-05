import React from 'react';

function Button ({ setRenderGlobe }) {
  return (
    <button
      className="blue-button"
            onClick={() => setRenderGlobe(true)} >
            Discover Cloju-1003
    </button>
  );
}

export default Button;
