function comments(state = initialState, action) {
  switch(action.type) {
    case ADD_COMMENT:
      return Object.assign({}, state, {
        comments: [
          {
            id: action.id,
            text: action.text,
            votes: 0
          }
          ,...state]
      })
    case REMOVE_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.filter(comment => comment.id !== action.id)
      });
    case EDIT_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.filter(comment => comment.id === action.id)
        text: action.text,
      });
    case THUMB_UP_COMMENT:
      return Objest.assign({}, state, {
        comments: state.comments.filter(comment => comment.id === action.id),
        votes: this.state.votes +1
      });
    case THUMB_DOWN_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.filter(comment => comment.id === action.id),
        votes: this.state.votes -1
      });

      default:
        return state;
  }
}

export default comments;
