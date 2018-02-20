import { fetchProphecies } from '../actions/fetch_info';
import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = (state) => {
  return {
    nextChangeId: state.nextChangeId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProphecies: () => dispatch(fetchProphecies())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
