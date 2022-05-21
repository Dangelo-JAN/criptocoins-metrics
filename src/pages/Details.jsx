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
  }

  return (
    <>
      <h1>ALL COIN STATS</h1>
      <div className="container-column">
        <div className="coin-detail-container">
          <img className="coin-img" src={coin?.image || coins[0]?.image} alt={coin?.name || coins[0]?.name} />
          <div className="container-column">
            <div>
              <span className="title-details">Name:</span>
              <span className="data">{coin?.name || coins[0]?.name}</span>
            </div>
            <div>
              <span className="title-details">Symbol:</span>
              <span className="data">{coin?.symbol || coins[0]?.symbol}</span>
            </div>
            <div>
              <span className="title-details">Ranking:</span>
              <span className="data">{coin?.market_cap_rank || coins[0]?.market_cap_rank}</span>
            </div>
          </div>
        </div>
        <div className="stats-container">
          <span className="title-details">Price:</span>
          <span className="data">{coin?.current_price || coins[0]?.current_price}</span>
          <span className="title-details">Change %:</span>
          <span className={coin?.price_change_percentage_24h > 0 ? 'price-up' : 'price-down'}>{coin?.price_change_percentage_24h || coins[0]?.price_change_percentage_24h}</span>
        </div>
      </div>
    </>
  );
};

export default Details;
