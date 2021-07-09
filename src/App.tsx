import React from "react";
import "./App.css";
import GlobalStyle from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { AuthProvider } from "./context/AuthenticationContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
        <GlobalStyle />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
