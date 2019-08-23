import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { deleteNews, getAllNews } from "../actions/newsAction";

import NewsList from "../components/NewsList";
import { INews } from "../interfaces/INews";
import { IApplicationState } from "../reducers";

const NewsContainer = () => {
  const allNews: INews[] = useSelector((state: IApplicationState) => {
    return state.news.allNews;
  });

  console.log(allNews);
  const dispatch = useDispatch();

  const deleteNewsClb = useCallback(
    (id: string) => dispatch(deleteNews(id)),
    []
  );

  useEffect(() => {
    dispatch(getAllNews());
  }, []);

  return <NewsList news={allNews} onDeleteNews={deleteNewsClb} />;
};

export default NewsContainer;
