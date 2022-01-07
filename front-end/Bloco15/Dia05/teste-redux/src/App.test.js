import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

// demais imports...
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const buttonAdicionar = queryByText('Clique aqui');
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const initialValue = queryByText('0'); 
      
    expect(buttonAdicionar).toBeInTheDocument();
    expect(initialValue).toBeInTheDocument();

    userEvent.click(buttonAdicionar);
    
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const firstClickValue = queryByText('1');
    expect(firstClickValue).toBeInTheDocument();
  });
});