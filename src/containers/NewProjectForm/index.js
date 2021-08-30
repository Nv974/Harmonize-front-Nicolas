import { connect } from 'react-redux';
import {changeField,createProject,uploadFiles} from '../../actions/projects';
import {uploadSpinner} from '../../actions/popup'
import NewProjectForm from '../../components/NewProjectForm';

const mapStateToProps = (state) =>{ 
    return({
    name : state.projects.newProjectName,
    picture : state.projects.newProjectPicture,
    audio_url: state.projects.newProjectAudio,
    genre: state.projects.newProjectGenre,
    audio_url_ext: state.projects.newProjectAudioExt,
    description:state.projects.newProjectDescription,
    tempId:state.projects.tempId,
    token:state.users.token,
    genreList:state.projects.genreList,
    tempSlug:state.projects.tempSlug,
    })}
        const mapDispatchToProps = (dispatch) =>({
        changeField:(fieldValue,fieldName)=> {
        dispatch(changeField(fieldValue,fieldName));
        },
        submitForm:() =>{
            dispatch(createProject());
        },
        uploadFiles:(audioFile,pictureFile)=>{
            dispatch(uploadFiles(audioFile,pictureFile))
        },
        uploadSpinner:(value)=>{
            dispatch(uploadSpinner(value))
        }
    })

export default connect(mapStateToProps,mapDispatchToProps)(NewProjectForm);