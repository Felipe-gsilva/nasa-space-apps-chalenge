import React from 'react';

function Button({ setRenderPage, setRenderDetails }) {
  return (
    <button
      className="white-button"
      onClick={() => { 
        setRenderPage(true); 
        setRenderDetails(false); 
      }}
    >
      Read More
    </button>
  );
}

export default Button;
