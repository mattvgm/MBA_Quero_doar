import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAlert } from "react-alert";
import { Doador } from "../models/Doador";
import api from "../services/api";
var jwt = require("jsonwebtoken");

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthContextData {
  signed: boolean;
  loggedUser: Doador | null;
  login(email: string, password: string): Promise<void>;
  logout(): Promise<void>;
  getLoggedUser(): Promise<void>;
}

export const AuthProvider: React.FC = ({ children }) => {
  const alert = useAlert();

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
    alert.success("Deslogado com sucesso!");
  }

  async function login(email: string, password: string) {
    console.log("fazendo login");

    const logonUser = {
      email, //"joao.silva@querodoar.com",
      password, //"teste",
      tipoLogin: "D",
    };

    console.log(logonUser);

    await api
      .post("/Auth", logonUser)
      .then(async (resp) => {
        const { userId, token } = resp.data;
        console.log("userid", userId);
        console.log("token", token);

        var b64string =
          "mlyDaLVs3SA0jQcHOlxZRiTZ0JvYvpGLxHN312KddWPHg8vlNSpXh0Xt61QelkEcz+UGnQ85fhMy/X0/cBmJAQ==";
        var buf = Buffer.from(b64string, "base64"); // Ta-da

        const isTokenValid = jwt.verify(token, buf);

        console.log("isvald", isTokenValid);
        api.defaults.headers.Authorization = `Bearer ${token}`;
        localStorage.setItem("@App:token", token);
        await api.get<Doador>(`/Doador/${userId}`).then((rp) => {
          setLoggedUser(rp.data);
          localStorage.setItem("@App:loggedUser", JSON.stringify(rp.data));
          alert.success("Logado com sucesso!");
        });
      })
      .catch((err) => {
        alert.error("Informações incorretas!");
      });
  }

  async function decode_jwt(jwt_token: string) {
    var b64string =
      "mlyDaLVs3SA0jQcHOlxZRiTZ0JvYvpGLxHN312KddWPHg8vlNSpXh0Xt61QelkEcz+UGnQ85fhMy/X0/cBmJAQ==";
    var buf = Buffer.from(b64string, "base64");

    return jwt.verify(jwt_token, buf);
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
