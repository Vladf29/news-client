import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { withRouter, RouteComponentProps } from "react-router-dom";

import { INews } from "../interfaces/INews";
import { IApplicationState } from "../reducers";
import { getNews } from "../actions/newsAction";

import NewsHeader from "../components/NewsHeader";
import NewsContent from "../components/NewsDesc";

export interface IArticaleContainerProps extends RouteComponentProps {}

const ArticleContainer: React.FC<IArticaleContainerProps> = ({ match }) => {
  const params: any = match.params;

  const news: INews = useSelector(
    (state: IApplicationState) => state.news.news
  );

  const dispatch = useDispatch();

  useEffect(() => {
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
        showInformation
      />
      <NewsContent content={news.content} />
    </>
  );
};

export default withRouter(ArticleContainer);
