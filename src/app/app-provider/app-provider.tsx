import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "../app";
import { ChakraProvider } from "@chakra-ui/react";

const AppProvider: React.FC = () => {
  return (
    <React.StrictMode>
      <ChakraProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </React.StrictMode>
  );
};

export default AppProvider;
