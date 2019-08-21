import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import store from "./store";

import News from "./pages/News";
import Article from "./pages/Article";
import NewsEdit from "./pages/NewsEdit";

import AppHeader from "./components/AppHeader";

const App: React.FC = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <AppHeader />
          <div className="app-container">
            <Switch>
              <Route path="/news" exact component={News} />
              <Route path="/news/:newsId/edit" component={NewsEdit} />
              <Route path="/news/:newsId" component={Article} />
              <Route path="/edit" component={NewsEdit} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
