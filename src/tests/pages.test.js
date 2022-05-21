import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
// import { fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';

import HomePage from '../pages/Home';
import DetailsPage from '../pages/Details';

describe('Pages renders correctly', () => {
  it('Home page renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <HomePage />
        </Provider>,
      )
      .toJSON();
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
    const element = document.querySelector('.coins-list');
    expect(element).toBeTruthy();
    expect(tree).toMatchSnapshot();
  });
  it('Details page renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <DetailsPage />
        </Provider>,
      )
      .toJSON();
    render(
      <Provider store={store}>
        <DetailsPage />
      </Provider>,
    );
    const element = document.querySelector('.coin-detail-container');
    expect(element).toBeTruthy();
    expect(tree).toMatchSnapshot();
  });
});
