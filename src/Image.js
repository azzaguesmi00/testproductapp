import React from 'react';

function Image({ imageUrl, name }) {
  return <img src={imageUrl} alt={name} className="product-image" />;
}

export default Image;