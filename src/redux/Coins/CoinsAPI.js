const coinsAPIKey = '3beec115917689814717a0bdd072fb4b';
const coinsEndpoint = `https://financialmodelingprep.com/api/v3/financial-statement-symbol-lists?apikey=${coinsAPIKey}`;

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
