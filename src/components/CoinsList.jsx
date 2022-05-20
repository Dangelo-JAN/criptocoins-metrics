import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCoins } from '../redux/Coins/Coins';
import Coin from './Coin';

const CoinsList = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins);

  useEffect(() => {
    if (!coins.lenght) dispatch(getCoins());
  }, [dispatch]);

  return (
    <>
      <ul className="container coins-list">
        {coins.map((coin) => (
          <li key={coin.id}>
            <Coin
              id={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CoinsList;
