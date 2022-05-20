import coinsReducer from '../../redux/Coins/Coins';

describe('Reducer tests', () => {
  it('should return the initial state', () => {
    expect(coinsReducer(undefined, {})).toBeTruthy();
  });
  
  it('should handle GET_COINS', () => {
    expect(
      coinsReducer(undefined, {
        type: 'GET_COINS',
      }),
    ).toBeTruthy();
  });
});

