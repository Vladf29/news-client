import React from "react";
import "./News.css";

import NewsHeader from "../components/NewsHeader";
import NewsContent from "../components/NewsDesc";

const fakeNews = {
  id: "1",
  title: "Heading",
  author: "Dev",
  date: "01.08.2021",
  content: `Eu incididunt consectetur velit consequat laboris laboris quis velit eiusmod laboris et. Do ullamco et dolore aliquip nulla laborum deserunt. Ad sint irure id incididunt ex proident mollit non nulla commodo proident occaecat. Proident consequat nulla consectetur laboris ullamco duis cillum ea ad elit sunt. Sunt aliquip quis consequat ad sint nostrud. Sit cupidatat excepteur ad anim ea amet enim tempor mollit.
Ex et ullamco laborum sunt anim dolore sint. Deserunt laboris sit cupidatat id labore aliqua aute et voluptate. Mollit laboris do culpa ipsum proident in veniam eu occaecat. Consectetur excepteur labore quis consequat cupidatat exercitation Lorem officia duis amet.
Proident tempor aliquip quis ut Lorem. Aliquip aliquip fugiat enim consequat eiusmod eiusmod commodo consectetur et sit. Nisi excepteur qui ad qui reprehenderit eu. Elit duis aliqua do id non eu esse occaecat exercitation cillum ea ipsum deserunt.`
};

const Article = () => {
  return (
    <div className="news-article">
      <NewsHeader
        title={fakeNews.title}
        author={fakeNews.author}
        date={fakeNews.date}
        showInformation
      />
      <NewsContent content={fakeNews.content} />
    </div>
  );
};

export default Article;
