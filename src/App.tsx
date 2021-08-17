import React from "react";
import {Redirect, Route, Switch, useLocation} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {About} from "./components/about/About";
import {Content} from "./components/content/Content";
import {Header} from "./components/header/Header";

const App: React.FC = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
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
      </CSSTransition>
    </TransitionGroup>
  );
};

export {App};
