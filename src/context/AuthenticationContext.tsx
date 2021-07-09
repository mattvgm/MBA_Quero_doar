import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { fakeDoadores } from "../mockedData/mockedData";
import { Doador } from "../models/Doador";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthContextData {
  signed: boolean;
  loggedUser: Doador | null;
  login(): Promise<void>;
  logout(): Promise<void>;
  getLoggedUser(): Promise<void>;
}

export const AuthProvider: React.FC = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState<Doador | null>(null);

  useEffect(() => {
    const storagedUser = localStorage.getItem("@App:loggedUser");
    const storagedToken = localStorage.getItem("@App:token");

    if (storagedToken && storagedUser) {
      setLoggedUser(JSON.parse(storagedUser));
      //api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  async function logout() {
    setLoggedUser(null);
    localStorage.removeItem("@App:loggedUser");
    localStorage.removeItem("@App:token");
  }

  async function login() {
    console.log("fazendo login");
    setLoggedUser(fakeDoadores[0]);
    //api.defaults.headers.Authorization = `Bearer ${response.data.token}`
    localStorage.setItem("@App:loggedUser", JSON.stringify(fakeDoadores[0]));
    localStorage.setItem("@App:token", "asda");
  }

  async function getLoggedUser() {
    console.log(loggedUser);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: Boolean(loggedUser),
        login,
        getLoggedUser,
        loggedUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
