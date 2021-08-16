import React from "react";
import "./style.scss";

export const About: React.FC = () => {
  return (
    <section className="about-content">
      {/* <h2> Router</h2> */}
      <p>
        <strong>React Router</strong> is one of the most popular routing
        libraries in the React ecosystem. It is a well thought out library with
        an extensive test suite and support for browser, react-native, and
        server-side rendering. The documentation provides exhaustive examples of
        all the tasks that React Router can help you with.
      </p>
    </section>
  );
};
