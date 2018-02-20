import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleFetch = this.handleFetch.bind(this);
  }
  
  handleFetch() {
    // if (id) {
    //   this.props.fetchAllStashes(id);
    // } else {
      this.props.fetchTradeInfo();
    // }
  }
  
  // componentWillReceiveProps(nextProps) {
  //   if (this.props.nextChangeId !== nextProps.nextChangeId) {
  //     this.handleFetch(nextProps.nextChangeId);
  //   }
  // }
  
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
