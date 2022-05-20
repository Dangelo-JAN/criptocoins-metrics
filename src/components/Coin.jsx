import React from 'react';
import PropTypes from 'prop-types';

const Coin = (props) => {
  const {
    id,
    name,
    image,
    symbol,
  } = props;

  const handlerDetails = (id) => {
    window.location.href = `details/${id}`;
  };

  return (
    <>
      <div className="container-column">
        <div className="coin-container">
          <img className="coin-img" src={image} alt={name} />
          <button onClick={() => handlerDetails(id)}>-></button>
        </div>
        <div className="container-column">
            <span className="title">Name:</span>
            <span className="data">{name}</span>
            <div className="container">
              <span className="title">Symbol:</span>
              <span className="data">{symbol}</span>
            </div>
          </div>
      </div>
    </>
  );
};

Coin.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default Coin;
