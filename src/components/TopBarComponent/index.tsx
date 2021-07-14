import React, { useCallback } from "react";
import { useContext } from "react";
import { HiOutlineUserCircle, HiHeart } from "react-icons/hi";
import AuthContext from "../../context/AuthenticationContext";

import { LinksBox, Linkable, TopBar } from "./styles";

const TopBarComponent: React.FC = () => {
  const auth = useContext(AuthContext);
  const user = auth.loggedUser?.nome;

  const Logout = useCallback(() => {
    auth.logout();
  }, [auth]);

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
          {/* <Linkable href="#1">Quem somos</Linkable>
          <Linkable href="#2">Quero doar</Linkable>
          <Linkable href="#3">Instituições</Linkable>
          <Linkable href="#4">Empresas parceiras</Linkable> */}
        </div>
      </LinksBox>
      <LinksBox className="right">
        <div style={{ display: "flex", alignItems: "center", float: "right" }}>
          <Linkable href="" style={{ marginRight: 5 }}>
            {user ? <HiOutlineUserCircle size={36} /> : ""}
          </Linkable>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Linkable href="" style={{ marginRight: 5 }}>
              {user ? `${user}` : ""}
            </Linkable>
            <Linkable href="" style={{ fontSize: 12 }} onClick={Logout}>
              {user ? <i>Logout</i> : ""}
            </Linkable>
          </div>
        </div>
      </LinksBox>
    </TopBar>
  );
};

export default TopBarComponent;
