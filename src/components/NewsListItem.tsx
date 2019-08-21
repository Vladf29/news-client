import React from "react";
import NewsHeader, { INewsHeader } from "./NewsHeader";
import NewsContent, { INewsDesc } from "./NewsDesc";

export interface INewsListItemProps extends INewsHeader, INewsDesc {}

const NewsListItem: React.FC<INewsListItemProps> = ({
  title,
  date,
  author,
  content,
  id
}) => {
  return (
    <div className="news-list-item">
      {/* Header  */}
      <NewsHeader title={title} date={date} author={author} id={id} showInformation/>
      {/* desc  */}
      <NewsContent content={content} shortContent />
      {/* end */}
    </div>
  );
};

export default NewsListItem;
