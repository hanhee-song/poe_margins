import { fetchTradeInfo } from '../actions/fetch_info';
import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = (state) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTradeInfo: () => dispatch(fetchTradeInfo())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
