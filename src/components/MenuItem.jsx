import React from 'react';

const MenuItem = ({ name, description, price }) => {
  
  return (
    <div className="menu-item">
      <h3>{name}</h3>
      <p>{description}</p>
      <p> ${price}</p>
    </div>
  );
};

export default MenuItem;
