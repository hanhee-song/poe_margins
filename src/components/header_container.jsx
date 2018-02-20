import { fetchTradeInfo } from '../actions/fetch_info';
import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = (state) => {
  return {
    nextChangeId: state.nextChangeId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTradeInfo: (id) => dispatch(fetchTradeInfo(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
