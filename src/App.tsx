import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import News from "./pages/News";
import AppHeader from "./components/AppHeader";
import Article from "./pages/Article";
import NewsEdit from "./pages/NewsEdit";

const App: React.FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <AppHeader />
        <div className="app-container">
          <Switch>
            <Route path="/news" exact component={News} />
            <Route path="/news/:newsId" component={Article} />
            <Route path="/news/:newsId/edit" component={NewsEdit} />
            <Route path="/edit" component={NewsEdit} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
