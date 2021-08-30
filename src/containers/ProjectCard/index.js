import { connect } from 'react-redux';
import {loadProject, getGenreSelected, getFilterGenre} from '../../actions/projects';
import {playThisSong } from '../../actions/player';

import ProjectCard from '../../components/ProjectCard';




const mapDispatchToProps = (dispatch) =>{
    
    return({
        loadProject:(id)=> {
        dispatch(loadProject(id))         
    },

    setGenreFilter : (genreValue) => {
        dispatch(getGenreSelected(genreValue))
    },

    checkFilter: () => {
        dispatch(getFilterGenre())
    },

    playThisSong:(audio_url,userName,projectName)=>{
            dispatch (playThisSong(audio_url,userName,projectName))
    }

})
}
export default connect(null,mapDispatchToProps)(ProjectCard);


