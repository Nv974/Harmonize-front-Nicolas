  
import { combineReducers } from 'redux';

import loadingReducer from './loading';
import projectsReducer from './projects';
import artistsReducer from './artists';
import usersReducer from './users';
import commentsReducer from './comments'
import messagesReducer from './messages';
import playerReducer from './player';
import popupReducer from './popup';

const rootReducer = combineReducers({
  projects: projectsReducer,
  comments: commentsReducer,
  messages: messagesReducer,
  artists: artistsReducer,
  users: usersReducer,
  loading : loadingReducer,
  player : playerReducer,
  popup : popupReducer,
});

export default rootReducer;