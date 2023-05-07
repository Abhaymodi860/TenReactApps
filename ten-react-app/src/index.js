import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// This function is a component that is rendered
// all the tags inside are JSX not HTML.
const App = () => {
  return (
    <div>
      <h1>App 1: Displaying JSX</h1>
      <h3>JSX is Cool!</h3>
    </div>
  );
};
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
