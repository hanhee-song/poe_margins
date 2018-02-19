import { fetchInfo } from '../actions/fetch_info';
import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = (state) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInfo: () => dispatch(fetchInfo())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
