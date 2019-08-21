import React from "react";
import { RouteComponentProps } from "react-router-dom";

import NewsHeader from "../components/NewsHeader";

export interface INewsEditProps extends RouteComponentProps {}

const NewsEdit: React.FC<INewsEditProps> = () => {
  return (
    <div className="news-article">
      <NewsHeader title="Heading" />
      {/* Edit Area */}
      <div className="news-edit">
        <div className="news-edit-container-field">
          <textarea className="news-edit-field">
            Aliqua quis aute duis culpa tempor consectetur quis ea
            reprehenderit. Enim magna amet eiusmod officia tempor est excepteur
            sit adipisicing nulla minim consectetur aute do. Veniam deserunt
            reprehenderit eu nisi proident ex reprehenderit Lorem irure
            consequat. Enim fugiat commodo aliquip id fugiat amet adipisicing
            laboris. Enim laborum fugiat pariatur cupidatat. Quis voluptate
            laboris ullamco non mollit qui. Amet ipsum veniam incididunt
            incididunt ipsum laboris et cupidatat mollit excepteur excepteur
            commodo. Irure ipsum culpa proident eiusmod id officia fugiat qui
            deserunt fugiat laboris. Nulla deserunt commodo deserunt nostrud
            nulla mollit esse velit commodo ut pariatur. Est irure exercitation
            et ut exercitation ut Lorem mollit. Occaecat culpa elit nulla et
            nulla dolor elit duis Lorem fugiat. Officia laboris ea ex commodo
            duis quis velit consectetur ullamco ad dolore irure. Officia eiusmod
            quis qui aute dolore fugiat mollit sit culpa.
          </textarea>
        </div>
        <div className="news-edit-btns">
          <button className="news-edit-btn news-edit-btn--success">Save</button>
          <button className="news-edit-btn news-edit-btn--danger">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsEdit;
