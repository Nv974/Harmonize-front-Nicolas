import { connect } from 'react-redux';
import { withRouter } from "react-router";


import Artist from '../../components/Artist';
import {loadArtist} from '../../actions/artists';
import { findRoute } from '../../selectors/router';
import {setLoading} from '../../actions/loading';
 
const mapStateToProps = (state,ownProps) =>({
    artist : state.artists.artistToDisplay,
    isLoading: state.loading.artist,
    isArtist:findRoute(state.artists.list, ownProps.match.params.slug),
})
    const mapDispatchToProps = (dispatch) =>({
        loadArtist:(id)=>{
        dispatch(loadArtist(id))
    },
    setLoading : (value,name) =>{
        dispatch(setLoading(value,name))
    },
})
const container = connect(mapStateToProps,mapDispatchToProps)(Artist);

 const containerWithRouter = withRouter(container);
 export default containerWithRouter
