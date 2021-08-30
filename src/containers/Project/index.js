import { connect } from 'react-redux';

import {changeField,editProject,loadInfoToUpdate, loadProject, deleteUserProject} from '../../actions/projects';
import { withRouter } from "react-router";
import {playThisSong} from '../../actions/player';



import Project from '../../components/Project';
import { findRoute } from '../../selectors/router';
import { setLoading } from '../../actions/loading';

const mapStateToProps = (state,ownProps) =>{

return({
isProject : findRoute(state.projects.list, ownProps.match.params.slug),
project:state.projects.projectToDisplay,  
projectIsLoading: state.loading.project,
token : state.users.token,
user_id:state.users.id,
nameToUpdate:state.projects.nameToUpdate,
updateGenre:state.projects.updateGenre,
updateDescription:state.projects.updateDescription,
isLogged:state.users.isLogged,
})}
const mapDispatchToProps = (dispatch) =>({
    changeField:(fieldValue,fieldName)=> {
    dispatch(changeField(fieldValue,fieldName));
    },
    editProject:()=>{
        dispatch(editProject());
    },
    loadInfoToUpdate:(name,description,genre)=>{
        dispatch(loadInfoToUpdate(name,description,genre));
    },

    loadProject:(id)=>{
        dispatch(loadProject(id))
    },

    playThisSong:(audio_url,userName,projectName)=>{
        dispatch (playThisSong(audio_url,userName,projectName))
    },
    
    deleteProject : () => {
        dispatch (deleteUserProject())
    },
    setLoading : (value,name) =>{
        dispatch(setLoading(value,name))
    },
})

const container = connect(mapStateToProps,mapDispatchToProps)(Project);

 const containerWithRouter = withRouter(container);
 export default containerWithRouter