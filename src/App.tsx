import React from "react";
import {Route, Switch, useLocation} from "react-router-dom";
import {About} from "./components/about/About";
import {Content} from "./components/content/Content";
import {Header} from "./components/header/Header";

const App: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <div className="App">
        <Header />
        <Switch location={location}>
          <Route exact path="/">
            <Content />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export {App};
