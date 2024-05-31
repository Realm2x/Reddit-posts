import { ActionCreator, Reducer } from "redux";
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS, MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction } from "./me/action";
import { MeState, meReducer } from "./me/reducer";

export type RootState = {
  token: string;
  commentText: string;
  me: MeState;
}

const initialState: RootState = {
  token: '',
  commentText: '',
  me: {
    loading: false,
    error: '',
    data: {},
  },
}

const UPDATE_COMMENT = 'UPDATE_COMMENT';
type UpdateCommentAction = {
  type: typeof UPDATE_COMMENT;
  text: string;
}
export const updateComment: ActionCreator<UpdateCommentAction> = (text) => ({
  type: UPDATE_COMMENT,
  text,
})

const SET_TOKEN = 'UPDATE_TOKEN';
type SetTokenAction = {
  type: typeof SET_TOKEN;
  token: string;
}
export const setToken: ActionCreator<SetTokenAction> = (token) => ({
  type: SET_TOKEN,
  token,
})

type MyAction = UpdateCommentAction
  | SetTokenAction
  | MeRequestAction
  | MeRequestSuccessAction
  | MeRequestErrorAction;
export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      } 
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action)
      }
    default:
      return state;
  }
}