export const sortedList = (state, action) => {
  const data = [...state.data];

  let orderBy = action && action.payload;
  if (!orderBy) {
    orderBy = state.orderBy;
  }
  data.sort((a, b) => {
    if (orderBy === 'mostVoted') {
      return b.points - a.points;
    } else if (orderBy === 'lessVoted') {
      return a.points - b.points;
    } else {
      return b.id - a.id;
    }
  });
  return { ...state, orderBy, data };
}

export const voteLink = (state, action) => {
  const data = [...state.data];
  const link = action.payload.link;
  const voteType = action.payload.voteType;
  data.map((item) => {
    if (item.id === link.id) {
      if (voteType === "up") item.points++;
      else if (item.points > 0) {
        item.points--;
      }
      return true;
    }
  });

  return sortedList({ ...state, data });
}