import { connect } from 'react-redux';

import {logOut,seeMyInfos,uploadProfilePicture} from '../../actions/users';

import UserInfos from '../../components/UserInfos';

const mapStateToProps = (state) => ({
    username: state.users.username,
    myProjects:state.users.myProjects,
    picture: state.users.picture,
    email : state.users.email,
    description : state.users.description,
    profil : state.users.profil

})
const mapDispatchToProps = (dispatch) =>({
    logOut:()=> {
    dispatch(logOut())
    },
    seeMyInfos:()=>{
        dispatch(seeMyInfos())
    },
    uploadProfilePicture:(picture)=>{
        dispatch(uploadProfilePicture(picture))
    }
    
})

export default connect(mapStateToProps,mapDispatchToProps)(UserInfos);