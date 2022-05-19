import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCoins } from '../redux/Coins/Coins';
import Coin from './Coin';

const CoinsList = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins);
  console.log(coins);

  useEffect(() => {
    if (!coins.lenght) dispatch(getCoins());
  }, []);

  return (
    <>
      <ul className="container coins-list">
        {coins.map((coin) => (
          <li>
            <Coin
              key={coin.id}
              id={coin.id}
              name={coin.name}
              image={coin.image}
              price={coin.current_price}
              symbol={coin.symbol}
              ranking={coin.market_cap_rank}
              changePercetage={coin.ath_change_percentage}
              spakLine={coin.sparkline_in_7d.price}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CoinsList;
