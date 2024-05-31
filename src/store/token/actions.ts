import { Action } from "redux"
import { ThunkAction } from "redux-thunk";
import { RootState, setToken } from "../reducer";
import { useEffect } from "react";

export const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  let token = null;
  const localToken = localStorage.getItem('token');
  const windowToken = window.__token__;

  if (localToken && localToken !== "undefined") {
    token = localToken;
  } else if (windowToken && windowToken !== "undefined") {
    token = window.__token__;
    localStorage.setItem('token', token);
  } else {
    token = null;
  }

  dispatch(setToken(token));
  window.history.pushState({}, "", "/")
}