import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleFetch = this.handleFetch.bind(this);
  }
  
  handleFetch() {
    this.props.fetchInfo();
  }
  
  render () {
    return (
      <div>
        This is a header
        <div onClick={this.handleFetch}>Click to update</div>
      </div>
    );
  }
}

export default Header;
