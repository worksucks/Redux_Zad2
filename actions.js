export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

{
  type: ADD_COMMENT,
  text: '',
  id: uuid.v4
}

{
  type: REMOVE_COMMENT,
  id: ''
}

{
  type: EDIT_COMMENT,
  id: '',
  text: ''
}

{
  type: THUMB_UP_COMMENT,
  thumb_up: '',
  id: '',
}

{
  type: THUNB_DOWN_COMMENT,
  thumb_down: '',
  id: '',
}

function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  }
};

function editComment(id) {
  return {
    type: EDIT_COMMENT,
    comments: state.comments.filter(comment => comment.id ===id),
    text,
  }
};

function removeComment(id) {
  return {
    comments: state.comments.filter(comment => comment.id !==id),
    comments: this.state.comments
  }
};

function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    comments: state.comments.filter(comment => comment.id ===id),
    this.thumb_up=this.thumb_up+1
  }
};

function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    comments: state.comments.filter(comment => comment.id ===id),
    this.thumb_down=this.thumb_down+1
  }
}
