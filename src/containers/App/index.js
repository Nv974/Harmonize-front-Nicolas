import { connect } from 'react-redux';
import {loadArtistsFromAPI} from '../../actions/artists';
import { setLoading } from '../../actions/loading';
import { openPopUp } from '../../actions/popup';
import {loadProjectsFromAPI,loadGenreFromAPI,getGenreSelected} from '../../actions/projects';
import {seeMyInfos,authorizeLogIn} from '../../actions/users';
import {clearComment} from '../../actions/comments' ;

import App from '../../components/App';

const mapStateToProps = (state) => ({
    token:state.users.token,
})
const mapDispatchToProps = (dispatch) =>{
return({
    loadProjectsFromAPI:()=> {
    dispatch(loadProjectsFromAPI())
    },
    loadArtistsFromAPI:()=> {
        dispatch(loadArtistsFromAPI())
    },
    setLoading : (value,name) =>{
        dispatch(setLoading(value,name))
    },
    openPopUp:(style,message,title) =>{
        dispatch(openPopUp(style,message,title))
    },
    loadGenreFromAPI:()=>{
        dispatch(loadGenreFromAPI())
    },
    getGenreSelected : (genreValue) => {
        dispatch(getGenreSelected(genreValue))
    },
    clearComment:()=>{
        dispatch(clearComment())
    },
    seeMyInfos:(id) =>{
        dispatch(seeMyInfos(id))
    },
    authorizeLogIn:(id,username,token,picture)=>{
        dispatch(authorizeLogIn(id,username,token,picture))
    }
   
})}

export default connect(mapStateToProps,mapDispatchToProps)(App);