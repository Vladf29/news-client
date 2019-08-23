import { Reducer } from "redux";

import * as newsConstants from "../constants";

import { INews } from "../interfaces/INews";
import { ActionNews } from "../actions/newsAction";

export interface INewsState {
  allNews: Array<INews>;
  loading: boolean;
  errorMessage: string;
  cacheNews: Array<INews>;
  news: INews;
}

const INIT_STATE: INewsState = {
  allNews: [],
  news: {
    id: "",
    title: "",
    author: "",
    date: "",
    content: ""
  },
  cacheNews: [],
  loading: false,
  errorMessage: ""
};

const reducer: Reducer<INewsState, ActionNews> = (
  state = INIT_STATE,
  action
) => {
  switch (action.type) {
    case newsConstants.NEWS_FETCH:
      return { ...state, loading: true, errorMessage: "" };
    case newsConstants.NEWS_FETCH_SUCCESS:
      return { ...state, loading: false, errorMessage: "" };
    case newsConstants.NEWS_FETCH_FAILD:
      return { ...state, loading: false, errorMessage: "Something went wrong" };
    case newsConstants.NEWS_GET_ALL:
      return {
        ...state,
        allNews: action.allNews
      };

    case newsConstants.NEWS_DELETE:
      return {
        ...state,
        allNews: state.allNews.filter(news => news.id !== action.id),
        news: state.news.id === action.id ? INIT_STATE.news : { ...state.news },
        cacheNews: state.cacheNews.filter(news => news.id !== action.id)
      };
    case newsConstants.NEWS_GET:
      return { ...state, news: action.news };
    case newsConstants.NEWS_SAVE:
      return {
        ...state,
        news: action.news
      };

    case newsConstants.NEWS_CACHE:
      return {
        ...state,
        cacheNews: [...state.cacheNews, action.news]
      };

    default:
      return state;
  }
};

export default reducer;
