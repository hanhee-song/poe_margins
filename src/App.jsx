import React from 'react';
import { Provider } from 'react-redux';

class App extends React.Component {
  render () {
    return (
      <Provider store={this.props.store}>
        <div className="app">
          Your react is working
        </div>
      </Provider>
    );
  }
}

export default App;
