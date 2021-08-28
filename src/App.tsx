import React from "react";
import {Content} from "./components/content/Content";

const App: React.FC<Record<string, never>> = () => {
  return (
    <>
      <h1 className="app-heading">React and TypeScript App!</h1>
      <Content />
    </>
  );
};

export {App};
