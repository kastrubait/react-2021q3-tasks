import React from "react";
import {Content} from "./components/Content";

const App: React.FC<Record<string, never>> = () => {
  return (
    <>
      <h1 className="app-heading">
        {new Date().toLocaleDateString()} React and TypeScript App!
      </h1>
      <Content />
    </>
  );
};

export {App};
