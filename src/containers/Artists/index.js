import { connect } from 'react-redux';

import Artists from '../../components/Artists';

const mapStateToProps = (state, ownProps) => ({
  artistsList : state.artists.list,
  artistsIsLoading: state.loading.artists,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Artists);
