import React from 'react'
import Counter from './Component/Counter'
import { Provider } from 'react-redux';
import store from './Store/index';

function App() {
  return (
    <Provider store={store}>
    <Counter />
    </Provider>
  )
}

export default App

