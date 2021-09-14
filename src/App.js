import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Switchers from './Switchers';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switchers />
        <p>TrybeTunes</p>
      </BrowserRouter>
    );
  }
}

export default App;
