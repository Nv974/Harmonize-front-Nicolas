import { connect } from 'react-redux';

import Slider from '../../components/Slider';

const mapStateToProps = (state) => ({
    //TODO Slice et filter pour récupérer les 5 bon projets
    projectsListNew : state.projects.list.reverse().slice(0,5),
    isLoadingHome : state.loading.home,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
