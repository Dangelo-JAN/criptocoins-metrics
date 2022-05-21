import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Coin = (props) => {
  const navigate = useNavigate();

  const {
    id,
    name,
    image,
    symbol,
  } = props;

  const handlerDetails = (id) => {
    navigate(`details/${id}`);
  };

  return (
    <>
      <div className="container-column">
        <div className="coin-container">
          <img className="coin-img" src={image} alt={name} />
          <button className="coin-button" type="button" onClick={() => handlerDetails(id)}>-></button>
        </div>
        <div className="container-column">
          <div className="title">{name}</div>
          <div className="coin-symbol">{symbol}</div>
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
