import React from "react";

import "./News.css";
import NewsList from "../components/NewsList";
import { INews } from "../interfaces/INews";

const fakeNews: Array<INews> = [
  {
    id: "1",
    title: "Heading",
    author: "Dev",
    date: "01.08.2021",
    content:
      "Occaecat aliqua et incididunt tempor proident pariatur. Occaecat aliqua et incididunt tempor proident pariatur."
  },
  {
    id: "2",
    title: "Heading",
    author: "Dev",
    date: "01.08.2021",
    content:
      "Occaecat aliqua et incididunt tempor proident pariatur. Occaecat aliqua et incididunt tempor proident pariatur."
  },
  {
    id: "3",
    title: "Heading",
    author: "Dev",
    date: "01.08.2021",
    content:
      "Occaecat aliqua et incididunt tempor proident pariatur. Occaecat aliqua et incididunt tempor proident pariatur."
  }
];

const News = () => {
  return (
    <div className="news">
      <NewsList news={fakeNews} />
    </div>
  );
};

export default News;
