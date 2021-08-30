import { connect } from 'react-redux';
import {changeField,logIn,logOut,setLoginVisibility} from '../../actions/users';

import LoginForm from '../../components/LoginForm';

const mapStateToProps = (state) =>{ 
return({
login : state.users.login,
password : state.users.passwordLogin,
isLogged: state.users.isLogged,
username: state.users.username,
picture:state.users.picture,
messageLog:state.users.messageLog,
loginIsVisible:state.users.loginIsVisible,
isResponsive : state.users.isResponsive
})}
    const mapDispatchToProps = (dispatch) =>({
    changeField:(fieldValue,fieldName)=> {
    dispatch(changeField(fieldValue,fieldName))
    },
    logIn:()=>{
        dispatch(logIn())
    },
    logOut:()=>{
        dispatch(logOut())
    },
    setLoginVisibility:(bool)=>{
        dispatch(setLoginVisibility(bool))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);