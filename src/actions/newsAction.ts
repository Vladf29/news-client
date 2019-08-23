import { Action, ActionCreator } from "redux";
import { batch } from "react-redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

import * as newsConstants from "../constants";
import { INews } from "../interfaces/INews";
import { IApplicationState } from "../reducers";

const fakeNews: INews = {
  id: "1",
  author: "Someone",
  date: "12.01.2019",
  title: `It's fake news`,
  content: `Deserunt laboris laborum qui enim cupidatat ex minim adipisicing ex ut. Elit ullamco occaecat aute fugiat culpa. Commodo sint ullamco id adipisicing incididunt enim fugiat reprehenderit sunt id minim ex. Deserunt elit voluptate reprehenderit Lorem dolor irure tempor id esse non. Tempor nulla mollit ex consectetur irure excepteur dolor esse et elit deserunt sunt.
Laboris Lorem tempor officia cillum excepteur. Minim non proident eiusmod id pariatur ut enim reprehenderit nostrud irure. Culpa dolor cillum qui exercitation esse. Sunt eu commodo minim irure duis ea. Laboris culpa minim labore veniam proident sunt pariatur sunt. Nostrud nisi excepteur est ea ipsum deserunt.`
};

interface IActionNewsFetch extends Action {
  type: newsConstants.NEWS_FETCH;
}

interface IActionNewsFetchSuccess extends Action {
  type: newsConstants.NEWS_FETCH_SUCCESS;
}

interface IActinoNewsFetchFaild extends Action {
  type: newsConstants.NEWS_FETCH_FAILD;
}

interface IActionNewsCache extends Action {
  type: newsConstants.NEWS_CACHE;
  news: INews;
}

interface IActinoNewsGetAll extends Action {
  type: newsConstants.NEWS_GET_ALL;
  allNews: INews[];
}

interface IActionNewsDelete extends Action {
  type: newsConstants.NEWS_DELETE;
  id: string;
}

interface IActionNewsGet extends Action {
  type: newsConstants.NEWS_GET;
  news: INews;
}

interface IActionNewsSave extends Action {
  type: newsConstants.NEWS_SAVE;
  news: INews;
}

export type ActionNewsFetch =
  | IActionNewsFetch
  | IActionNewsFetchSuccess
  | IActinoNewsFetchFaild;

export type ActionNewsCache = IActionNewsCache;
export type ActionGetAllNews = IActinoNewsGetAll | ActionNewsFetch;
export type ActionDeleteNews = IActionNewsDelete | ActionNewsFetch;
export type ActionGetNews = IActionNewsGet | IActionNewsCache | ActionNewsFetch;
export type ActionNewSave = IActionNewsSave | ActionNewsFetch;

//
export type ActionNews =
  | ActionGetAllNews
  | ActionDeleteNews
  | ActionGetNews
  | ActionNewsCache
  | ActionNewSave
  | ActionNewsFetch;
//

export const getAllNews: ActionCreator<
  ThunkAction<Promise<void>, {}, null, ActionGetAllNews>
> = () => async dispath => {
  try {
    //TODO: Fetch data

    dispath({ type: newsConstants.NEWS_GET_ALL, allNews: [fakeNews] });
  } catch (err) {}
};

export const deleteNews: ActionCreator<
  ThunkAction<Promise<boolean>, IApplicationState, null, ActionDeleteNews>
> = (id: string) => async (dispatch, getState) => {
  try {
    //TODO: Request;

    console.log("delete news", id);

    dispatch({ type: newsConstants.NEWS_DELETE, id });

    return true;
  } catch (err) {
    return false;
  }
};

export const getNews: ActionCreator<
  ThunkAction<Promise<void>, IApplicationState, null, ActionGetNews>
> = (id: string) => async (dispatch, getState) => {
  try {
    //TODO: Request

    console.log("GETTING news", id);

    const { cacheNews } = getState().news;

    const cachedNews: INews | undefined = cacheNews.find(
      news => news.id === id
    );

    if (cachedNews) {
      dispatch({ type: newsConstants.NEWS_GET, news: cachedNews });
      return;
    }

    const news: INews = fakeNews;

    batch(() => {
      dispatch({ type: newsConstants.NEWS_GET, news });
      dispatch(addInCacheNews(news));
    });
  } catch (err) {}
};

export const addInCacheNews: ActionCreator<IActionNewsCache> = (
  news: INews
) => {
  return { type: newsConstants.NEWS_CACHE, news };
};

export const saveNews: ActionCreator<
  ThunkAction<Promise<void>, IApplicationState, null, ActionNewSave>
> = (id: string, title: string, content: string) => async (
  dispatch,
  getState
) => {
  try {
    const news = getState().news.news;
    //TODO: Request

    dispatch({
      type: newsConstants.NEWS_SAVE,
      news: { ...news, title, content }
    });
  } catch (err) {}
};
