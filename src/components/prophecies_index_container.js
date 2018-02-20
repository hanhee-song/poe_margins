import { fetchProphecies } from '../actions/fetch_info';
import { connect } from 'react-redux';
import PropheciesIndex from './prophecies_index';

const mapStateToProps = (state) => {
  return {
    prophecies: state.prophecies
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
)(PropheciesIndex);
