import {ADD_COMMENT} from './actions';
import {REMOVE_COMMENT} from './actions';
import {EDIT_COMMENT} from './actions';
import {THUMB_UP_COMMENT} from './actions';
import {THUMB_DOWN_COMMENT} from './actions';
import { combineReducers} from 'redux';
import {comments} from './comments';

const app = combineReducers({
  comments
});

const initialState = {
  comments: [];
  users: []
}
