import { connect } from 'react-redux';
import {loadArtist} from '../../actions/artists';

import ArtistCard from '../../components/ArtistCard';

// const mapStateToProps = (state,ownProps) => ({
// props : state.xxx
// })
const mapDispatchToProps = (dispatch) =>{
    
    return({
        loadArtist:(id)=> {
        dispatch(loadArtist(id))       
    },
})
}
export default connect(null,mapDispatchToProps)(ArtistCard);