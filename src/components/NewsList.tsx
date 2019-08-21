import React from "react";

import NewsListItem from "./NewsListItem";
import { INews } from "../interfaces/INews";

interface INewsListProps {
  news: Array<INews>;
}

const NewsList: React.FC<INewsListProps> = ({ news }) => {
  return (
    <div className="news-list">
      {/*  */}
      {news.map((data, ind) => (
        <NewsListItem
          key={ind}
          title={data.title}
          author={data.author}
          date={data.date}
          content={data.content}
          id={data.id}
        />
      ))}
      {/*  */}
    </div>
  );
};

export default NewsList;
