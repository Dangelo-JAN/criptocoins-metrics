import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCoins } from "../redux/Coins/Coins";
import Coin from './Coin';

const CoinsList = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins);
  console.log(coins);
  
  useEffect(() => {
    if(!coins.lenght) dispatch(getCoins());
  }, []);

  return (
    <>
      <ul className="rockets-list">
        {coins.map((coin) => (
          <Coin
            key={coin.coins.uuid}
            id={coin.coins.uuid}
            name={coin.coins.name}
            price={coin.coins.price}
            symbol={coin.coins.symbol}
            iconUrl={coin.coins.iconUrl}
            color={coin.coins.color}
            spakLine={coin.coins.sparkline}
          />
        ))}
      </ul>
    </>
  )
}

export default CoinsList;
