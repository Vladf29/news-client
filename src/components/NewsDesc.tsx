import React from "react";

export interface INewsDesc {
  content: string;
  shortContent?: boolean;
}

const NewsContent: React.FC<INewsDesc> = ({ content, shortContent }) => {
  if (shortContent && content.length > 200) {
    content = content.slice(0, 200) + "...";
  }
  return <div className="news-desc">{content}</div>;
};

export default NewsContent;
