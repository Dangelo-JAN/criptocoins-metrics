const coinsEndpoint = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=24h';

const fetchCoins = async () => {
  try {
    const res = await fetch(coinsEndpoint);
    const coins = await res.json();
    if (res.ok) {
      return coins;
    }
  } catch (error) {
    return error;
  }
  return false;
};

export default fetchCoins;
