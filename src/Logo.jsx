import React from 'react';
import texture from "/logo.png";

function Logo () {
    return (
        <div className="logo-div" >
            <img src={texture} className="logo"/>
        </div>
  );
}

export default Logo;
