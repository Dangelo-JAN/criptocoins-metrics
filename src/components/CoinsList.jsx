import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCoins } from '../redux/Coins/Coins';
import Coin from './Coin';

const CoinsList = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins);

  useEffect(() => {
    if (!coins.lenght) dispatch(getCoins());
  }, [dispatch]);

  const filteredCoins = coins.filter((coin) => coin.name
    .toLowerCase().includes(search.toLocaleLowerCase()));

  return (
    <>
      <div className="input-container">
        <input className="input-style" type="text" placeholder="Search Coin" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <ul className="container coins-list">
        {filteredCoins.map((coin) => (
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
