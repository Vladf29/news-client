import React from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import NewsTitle from "./NewsTitle";

export interface INewsHeader {
  title: string;
  author?: string;
  date?: string;
  id?: string;
}

export interface INewsHeaderProps extends RouteComponentProps, INewsHeader {
  showInformation?: boolean;
}

const NewsHeader: React.FC<INewsHeaderProps> = ({
  title,
  author,
  date,
  id,
  match,
  history,
  showInformation
}) => {
  return (
    <div className="news-header">
      <div className="news-header-container">
        <div>
          <div>{!id && <span onClick={() => history.goBack()}>Back</span>}</div>
          <NewsTitle>
            {id ? <Link to={`${match.path}/${id}`}>{title}</Link> : title}
          </NewsTitle>
        </div>
        <div className="news-header-controls">
          <div className="news-header-controls-item icon-edit" />
          <div className="news-header-controls-item icon-close" />
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
