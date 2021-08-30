import { SET_LOADING } from "../actions/loading";


const initialtate = {
    home:true,
    artists:true,
    projects:true,
    project:true,
    artist:true,
    user:true,
    messages:true,
};
export default (state = initialtate, action = {}) => {
  switch (action.type) {

    case SET_LOADING:
      return {
        ...state,
        [action.name]:action.value,
      };
    default:
      return state;
  }
};