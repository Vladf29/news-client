import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";

import NewsHeader from "../components/NewsHeader";
import { INews } from "../interfaces/INews";
import { IApplicationState } from "../reducers";
import { saveNews, getNews } from "../actions/newsAction";

export interface INewsEditContainerProps extends RouteComponentProps {}

const NewsEditContainer: React.FC<INewsEditContainerProps> = ({
  match,
  history
}) => {
  const news: INews = useSelector(
    (state: IApplicationState) => state.news.news
  );

  const dispatch = useDispatch();

  const [content, setContent] = useState(news.content);
  const [title, setTitle] = useState(news.title);

  useEffect(() => {
    const { params }: any = match;
    if (news.id === params.newsId) return;

    dispatch(getNews(params.newsId));
  }, []);

  useEffect(() => {
    setContent(news.content);
    setTitle(news.title);
  }, [news.content, news.title]);

  const _saveNews = () => {
    dispatch(saveNews(news.id, title, content));
    history.push("/news");
  };

  const _cancelNews = () => {
    history.push("/news");
  };

  return (
    <>
      <NewsHeader title={news.title} />
      {/* Edit Area */}
      <div className="news-edit">
        <div className="news-edit-container-field">
          <textarea
            className="news-edit-field"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </div>
        <div className="news-edit-btns">
          <button
            className="news-edit-btn news-edit-btn--success"
            onClick={_saveNews}
          >
            Save
          </button>
          <button
            className="news-edit-btn news-edit-btn--danger"
            onClick={_cancelNews}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default withRouter(NewsEditContainer);
