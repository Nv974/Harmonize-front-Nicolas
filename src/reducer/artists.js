import { act } from 'react-dom/test-utils';
import { GET_ARTISTS_LIST,GET_ARTIST} from'../actions/artists';

const initialtate = {
    list:[],
    artistToDisplay:'',
};

export default (state = initialtate, action = {}) => {
  switch (action.type) {
    
    case GET_ARTISTS_LIST:
      return {
        ...state,
        list: action.artistsList,
      };
      case GET_ARTIST:
      return {
        ...state,
        artistToDisplay: action.artist,
      };
    default:
      return state;
  }
};