import { connect } from 'react-redux';
import { setUserName,createUser,setUserMail,setUserPassword,setUserDescription,setUserProfil ,editUser, updateUserName} from '../../actions/users';
import SignUp from '../../components/SignUp'


const mapStateToProps = (state, ownProps) => ({
  userName : state.users.username,
  editedUserName : state.users.newUserName,
  userMail : state.users.email,
  userPassword : state.users.password,
  userDescription : state.users.description,
  userProfil : state.users.profil,
  token: state.users.token,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setNewUserName: (newUserName) => {
        dispatch(setUserName(newUserName));
      },

      editUserName: (newName) => {
        console.log(newName);
        dispatch(updateUserName(newName));
      },

      setNewUserMail: (newUserMail) => {
        dispatch(setUserMail(newUserMail));
      },
      setNewUserPassword: (newUserPassword) => {
        dispatch(setUserPassword(newUserPassword));
      },
      setNewUserDescription: (newUserDescription) => {
        dispatch(setUserDescription(newUserDescription));
      },
      setNewUserProfil: (newUserProfil) => {
        dispatch(setUserProfil(newUserProfil));
      },

      addUser: () => {
        dispatch(createUser());
      },
      editUser:()=>{
        dispatch(editUser());
      }
      
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
