import { connect } from 'react-redux';
import { getResponsiveOff, getResponsiveOn } from '../../actions/users'

import Nav from '../../components/Nav';

const mapStateToProps = (state) => ({
isLogged : state.users.isLogged,
isResponsive: state.users.isResponsive
})
const mapDispatchToProps = (dispatch,ownProps) =>({
    setResponsiveOn:()=> {
    dispatch(getResponsiveOn())
    },
    setResponsiveOff:()=> {
        dispatch(getResponsiveOff())
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);