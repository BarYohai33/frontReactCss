import React, { Component } from 'react';
import './App.css';
import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';
import Shipping from './views/shipping'

class App extends Component {
  render() {
    return (
      <Shipping/>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
