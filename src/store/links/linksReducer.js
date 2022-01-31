import {
  ADD_NEW_LINK,
  VOTE_LINK,
  DELETE_LINK,
  SORT_LINKS,
} from "./actionTypes";

import { sortedList, voteLink } from "utils/helpers";

const INITIAL_STATE = {
  data: [],
  loading: false,
  orderBy: "lastAdded"
};

function linksReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_NEW_LINK:
      return { ...state, data: [...state.data, action.payload] };
    case VOTE_LINK:
      return voteLink(state, action);
    case DELETE_LINK:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload.id),
      };
    case SORT_LINKS:
      return sortedList(state, action);
    default:
      return state;
  }
}

export default linksReducer;
