import React from "react";
import {
  Link,
  withRouter,
  NavLink,
  RouteComponentProps
} from "react-router-dom";
import NewsTitle from "./NewsTitle";

export interface INewsHeaderProps extends RouteComponentProps {
  showInformation?: boolean;
  title: string;
  author?: string;
  date?: string;
  id?: string;
  onDeleteNews?: Function;
}

const NewsHeader: React.FC<INewsHeaderProps> = ({
  title,
  author,
  date,
  id,
  match,
  history,
  onDeleteNews = () => {},
  showInformation
}) => {
  return (
    <div className="news-header">
      <div className="news-header-container">
        <div>
          <div>{!id && <span onClick={() => history.goBack()}>Back</span>}</div>
          <NewsTitle>
            {id ? <Link to={`/news/${id}`}>{title}</Link> : title}
          </NewsTitle>
        </div>
        <div className="news-header-controls">
          <NavLink
            className="news-header-controls-item icon-edit"
            to={`/news/${id}/edit`}
          />
          <div
            className="news-header-controls-item icon-close"
            onClick={() => onDeleteNews(id)}
          />
        </div>
      </div>
      {showInformation && (
        <div className="news-header-container">
          <div>
            <span className="news-author">{author}</span>{" "}
            <span className="news-author">/</span>{" "}
            <span className="news-time">{date}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(NewsHeader);
