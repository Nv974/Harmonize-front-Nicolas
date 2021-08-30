import { connect } from 'react-redux';
import { getProjectsOrder,loadProjectsFromAPI, getGenreSelected, getFilterGenre } from '../../actions/projects';
import Projects from '../../components/Projects';
import { setLoading } from '../../actions/loading';



const mapStateToProps = (state) => {
    
    return({
    projectsList : state.projects.list,
    projectsIsLoading :state.loading.projects,
    projectsOrder:state.projects.projectsOrder,
    genreSelected : state.projects.genreSelected,
    isFiltered : state.projects.isFiltered,
    genreList:state.projects.genreList,
    })}

const mapDispatchToProps = (dispatch) =>({
    setProjectsOrder: (order) => {
        dispatch(getProjectsOrder(order))
    },
    setLoading : (load) => {
        dispatch(setLoading(load))
    },
    loadProjectsFromAPI: ()=>{
        dispatch(loadProjectsFromAPI())
    },

    setGenreFilter : (genreValue) => {
        dispatch(getGenreSelected(genreValue))
    },

    checkFilter: () => {
        dispatch(getFilterGenre())
    },

    })

export default connect(mapStateToProps,mapDispatchToProps)(Projects);