import React from "react";

const NewsTitle: React.FC = props => {
  return <h3 className="news-header-title">{props.children}</h3>;
};

export default NewsTitle;
