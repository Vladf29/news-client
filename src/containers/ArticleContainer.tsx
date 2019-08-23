import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { withRouter, RouteComponentProps } from "react-router-dom";

import { INews } from "../interfaces/INews";
import { IApplicationState } from "../reducers";
import { getNews, deleteNews } from "../actions/newsAction";

import NewsHeader from "../components/NewsHeader";
import NewsContent from "../components/NewsDesc";

export interface IArticaleContainerProps extends RouteComponentProps {}

const ArticleContainer: React.FC<IArticaleContainerProps> = ({
  match,
  history
}) => {
  const news: INews = useSelector(
    (state: IApplicationState) => state.news.news
  );

  const dispatch: any = useDispatch();

  const deleteNewsClb = useCallback(async (id: string) => {
    const res: boolean = await dispatch(deleteNews(id));
    if (res) history.goBack();
  }, []);

  useEffect(() => {
    const params: any = match.params;
    if (news.id === params.newsId) return;

    dispatch(getNews(params.newsId));
  }, []);

  return (
    <>
      <NewsHeader
        title={news.title}
        author={news.author}
        date={news.date}
        id={news.id}
        onDeleteNews={deleteNewsClb}
        showInformation
        showControls
      />
      <NewsContent content={news.content} />
    </>
  );
};

export default withRouter(ArticleContainer);
