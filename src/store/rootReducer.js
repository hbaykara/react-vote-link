import { combineReducers } from 'redux';

import links from './links/linksReducer';


const rootReducer = combineReducers({
  links
});

export default rootReducer;