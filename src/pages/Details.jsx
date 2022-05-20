import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCoins } from '../redux/Coins/Coins';

const Details = () => {
  const { coin_id: coinId } = useParams();
  const dispatch = useDispatch();


  useEffect(() => {
    if (!coins.length) dispatch(getCoins());
  }, [dispatch]);

  const coins = useSelector((state) => state.coins);



  let coin;
  if (coins[0]) {
    coin = coins.find((coin) => coin.id === coinId);
  }
  // console.log(coin.current_price);

  // const {
  //   name,
  //   image,
  //   current_price,
  //   symbol,
  //   market_cap_rank,
  //   price_change_percentage_24h,
  // } = coin;

  return (
    <>
      <div className="container-column">
        <div className="coin-container">
          <img className="coin-img" src={coin?.image} alt={coin?.name} />
          <div className="container-column">
            <span className="title">Name:</span>
            <span className="data">{coin?.name}</span>
            <div className="container">
              <span className="title">Symbol:</span>
              <span className="data">{coin?.symbol}</span>
              <span className="title">Ranking:</span>
              <span className="data">{coin?.market_cap_rank}</span>
            </div>
          </div>
        </div>
        <div>
          <span className="title">Price:</span>
          <span className="data">{coin?.current_price}</span>
          <br />
          <span className="title">Change %:</span>
          <span className="data">{coin?.price_change_percentage_24h}</span>
        </div>
      </div>
    </>
  );
};

export default Details;


// return (
//   <>
//     <div className="container-column">
//       <div className="coin-container">
//         <img className="coin-img" src={image} alt={name} />
//         <div className="container-column">
//           <span className="title">Name:</span>
//           <span className="data">{name}</span>
//           <div className="container">
//             <span className="title">Symbol:</span>
//             <span className="data">{symbol}</span>
//             <span className="title">Ranking:</span>
//             <span className="data">{ranking}</span>
//           </div>
//         </div>
//       </div>
//       <div>
//         <span className="title">Price:</span>
//         <span className="data">{price}</span>
//         <br />
//         <span className="title">Change %:</span>
//         <span className="data">{changePercetage}</span>
//       </div>
//     </div>
//   </>
// );
// };

// Coin.propTypes = {
// id: PropTypes.string.isRequired,
// name: PropTypes.string.isRequired,
// price: PropTypes.number.isRequired,
// image: PropTypes.string.isRequired,
// symbol: PropTypes.string.isRequired,
// ranking: PropTypes.number.isRequired,
// changePercetage: PropTypes.number.isRequired,
// sparkline: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])).isRequired,
// };
