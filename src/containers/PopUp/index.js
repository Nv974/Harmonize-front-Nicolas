import { connect } from 'react-redux';

import PopUp from '../../components/PopUp';

import {closePopUp} from '../../actions/popup';


const mapStateToProps = (state) => ({
isOpen : state.popup.isOpen,
style: state.popup.style,
message: state.popup.message,
title: state.popup.title,

})
const mapDispatchToProps = (dispatch) =>({
closePopUp :()=> {
dispatch(closePopUp())
},
})

export default connect(mapStateToProps,mapDispatchToProps)(PopUp);