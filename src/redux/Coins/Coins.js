import fetchCoins from './CoinsAPI';

const GET_COINS = 'criptocoins-metrics/metrics/GET_COINS';
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COINS:
      return [...coins, payload];
      // return action.payload.map((coins) => ({
      //   ...coins,
      // }));

    default:
      return state;
  }
};

export const getCoins = () => async (dispatch) => {
  const coins = await fetchCoins();
  dispatch({ type: GET_COINS, payload: coins });
};

export default reducer;
