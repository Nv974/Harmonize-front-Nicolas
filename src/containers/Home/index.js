import { connect } from 'react-redux';

import Home from '../../components/Home';

const mapStateToProps = (state) => ({
    //TODO Slice et filter pour récupérer les 5 bon projets
    projectsListNew : state.projects.list.slice(0,5),
    isLoadingHome : state.loading.home,
    isResponsive : state.users.isResponsive,
    hottestList: state.projects.hottestList,
})
    // const mapDispatchToProps = (dispatch,ownProps) =>({
    //     functionInComponent:(xxx)=> {
    //     dispatch(variableToAction(xxx))
    //     },
    // })

export default connect(mapStateToProps)(Home);