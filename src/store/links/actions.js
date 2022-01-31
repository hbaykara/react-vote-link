import * as ActionTypes from './actionTypes';

export const addNewLink = payload => ({
  type: ActionTypes.ADD_NEW_LINK,
  payload
});

export const voteLink = payload => ({
  type: ActionTypes.VOTE_LINK,
  payload
});

export const deleteLink = payload => ({
  type: ActionTypes.DELETE_LINK,
  payload,
});

export const sortLinks = payload => ({
  type: ActionTypes.SORT_LINKS,
  payload,
});
