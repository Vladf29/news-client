import React from "react";
import { RouteComponentProps } from "react-router-dom";

import NewsHeader from "../components/NewsHeader";
import NewsEditContainer from "../containers/NewsEditContainer";

export interface INewsEditProps extends RouteComponentProps {}

const NewsEdit: React.FC<INewsEditProps> = () => {
  return (
    <div className="news-article">
      <NewsEditContainer />
    </div>
  );
};

export default NewsEdit;
