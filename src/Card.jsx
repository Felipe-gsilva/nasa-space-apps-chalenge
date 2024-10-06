import React from 'react';

function Card({ title, description, imageUrl, buttonText, onButtonClick }) {
  return (
    <div className="card-container border rounded ">
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={title} 
          className="card-image w-full h-48 object-cover rounded-t"
        />
      )}
      
      {/* Card Content */}
      <div className="card-content p-4">
        <h3 className="card-title text-lg font-bold mb-2">{title}</h3>
        <div className="card-description text-gray-700 mb-4">{description}</div>
        {buttonText && (
          <button 
            className="card-button "
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
