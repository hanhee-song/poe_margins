import React from 'react';
import { Provider } from 'react-redux';
import HeaderContainer from './components/header_container';

class App extends React.Component {
  render () {
    return (
      <Provider store={this.props.store}>
        <div className="app">
          <HeaderContainer />
          Your react is working
        </div>
      </Provider>
    );
  }
}

export default App;
