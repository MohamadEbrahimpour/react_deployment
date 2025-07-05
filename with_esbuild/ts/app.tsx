import React from "react";
import ReactDOM from "react-dom/client";

function App(): JSX.Element {
  return <h1>Hello World</h1>;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
