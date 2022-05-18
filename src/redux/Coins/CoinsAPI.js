let page = 0;
const coinsAPIKey = '?apikey=3beec115917689814717a0bdd072fb4b';
const coinsEndpoint = `https://api.coinranking.com/v2/coins${coinsAPIKey}&limit=10`;

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
