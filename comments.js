function comments(state = [], action) {
  switch(action.type) {
    case ADD_COMMENT:
      return [{
        id: action.id,
        text: action.text,
        votes: 0
      }
      ,...state];
    case REMOVE_COMMENT:
    case EDIT_COMMENT:
    case THUMB_UP_COMMENT:
    case THUMB_DOWN_COMMENT:
  }
}
