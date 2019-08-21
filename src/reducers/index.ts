import { combineReducers } from "redux";

import newsReducer, { INewsState } from "./newsReducer";

export interface IApplicationState {
  news: INewsState;
}

export default combineReducers<IApplicationState>({
  news: newsReducer
});
