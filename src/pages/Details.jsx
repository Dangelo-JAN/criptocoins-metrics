import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCoins } from '../redux/Coins/Coins';

const Details = () => {
  let coin;
  const { coin_id: coinId } = useParams();
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins);

  useEffect(() => {
    if (!coins.length) dispatch(getCoins());
  }, [dispatch]);

  if (coins[0]) {
    coin = coins.find((coin) => coin.id === coinId);
  };

  return (
    <>
      <div className="container-column">
        <div className="coin-container">
          <img className="coin-img" src={coin?.image} alt={coin?.name} />
          <div className="container-column">
            <span className="title-details">Name:</span>
            <span className="data">{coin?.name}</span>
            <div className="container">
              <span className="title-details">Symbol:</span>
              <span className="data">{coin?.symbol}</span>
              <span className="title-details">Ranking:</span>
              <span className="data">{coin?.market_cap_rank}</span>
            </div>
          </div>
        </div>
        <div>
          <span className="title-details">Price:</span>
          <span className="data">{coin?.current_price}</span>
          <br />
          <span className="title-details">Change %:</span>
          <span className="data">{coin?.price_change_percentage_24h}</span>
        </div>
      </div>
    </>
  );
};

export default Details;
