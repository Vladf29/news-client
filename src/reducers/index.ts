import { combineReducers } from "redux";

import newsReducer, { INewsState } from "./newsReducer";
import userReducer, { IUserState } from "./userReducer";

export interface IApplicationState {
  news: INewsState;
  user: IUserState;
}

export default combineReducers<IApplicationState>({
  news: newsReducer,
  user: userReducer
});
