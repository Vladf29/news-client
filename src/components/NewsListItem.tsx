import React from "react";

import { INews } from "../interfaces/INews";

import NewsHeader from "./NewsHeader";
import NewsContent from "./NewsDesc";

export interface INewsListItemProps extends INews {
  onDeleteNews: Function;
}

const NewsListItem: React.FC<INewsListItemProps> = ({
  title,
  date,
  author,
  content,
  id,
  onDeleteNews
}) => {
  return (
    <div className="news-list-item">
      {/* Header  */}
      <NewsHeader
        title={title}
        date={date}
        author={author}
        id={id}
        onDeleteNews={onDeleteNews}
        showInformation
        showControls
      />
      {/* desc  */}
      <NewsContent content={content} shortContent />
      {/* end */}
    </div>
  );
};

export default NewsListItem;
