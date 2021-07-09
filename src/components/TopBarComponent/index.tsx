import React from "react";
import { useContext } from "react";
import { HiOutlineUserCircle, HiHeart } from "react-icons/hi";
import AuthContext from "../../context/AuthenticationContext";

import { LinksBox, Linkable, TopBar } from "./styles";

const TopBarComponent: React.FC = () => {
  const auth = useContext(AuthContext);
  const user = auth.loggedUser?.nome;

  return (
    <TopBar>
      <LinksBox className="left">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <HiHeart size={32} />
          Quero Doar
        </div>
      </LinksBox>
      <LinksBox className="mid">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            float: "right",
          }}
        >
          <Linkable href="#1">Quem somos</Linkable>
          <Linkable href="#2">Quero doar</Linkable>
          <Linkable href="#3">Instituições</Linkable>
          <Linkable href="#4">Empresas parceiras</Linkable>
        </div>
      </LinksBox>
      <LinksBox className="right">
        <div style={{ display: "flex", alignItems: "center", float: "right" }}>
          <Linkable href="" style={{ marginRight: 5 }}>
            <HiOutlineUserCircle size={32} />
          </Linkable>
          <Linkable href="" style={{ marginRight: 5 }}>
            {user ? `Olá ${user}` : ""}
          </Linkable>
        </div>
      </LinksBox>
    </TopBar>
  );
};

export default TopBarComponent;
