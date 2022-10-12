import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./app";

const AppProvider: React.FC = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default AppProvider;
