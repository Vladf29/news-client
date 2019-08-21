import React from "react";

import { INews } from "../interfaces/INews";

import NewsHeader from "./NewsHeader";
import NewsContent from "./NewsDesc";

export interface INewsListItemProps extends INews {}

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
      <NewsHeader
        title={title}
        date={date}
        author={author}
        id={id}
        showInformation
      />
      {/* desc  */}
      <NewsContent content={content} shortContent />
      {/* end */}
    </div>
  );
};

export default NewsListItem;
