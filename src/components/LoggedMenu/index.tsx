import React, { useContext } from "react";

import { Container, LeftBox, Menubox } from "./styles";
import {
  HiOutlineUserCircle,
  HiHeart,
  HiHome,
  HiIdentification,
  HiGift,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthenticationContext";

const LoggedMenu: React.FC = () => {
  const auth = useContext(AuthContext);
  const user = auth.loggedUser?.nome;

  return (
    <LeftBox>
      <b>Olá, {user}</b>
      <ul>
        <li>
          <Link to="/donations">
            <HiHeart size={32} /> Doações Realizadas
          </Link>
        </li>
        <li>
          <Link to="/cupons">
            <HiGift size={32} /> Cupons
          </Link>
        </li>
        <li>
          <Link to="/institutions">
            <HiHome size={32} /> Instituições Amparadas
          </Link>
        </li>
        {/* <li><Link to="/myprofile"><HiIdentification size={32}/> Meu Cadastro</Link></li> */}
      </ul>
    </LeftBox>
  );
};

export default LoggedMenu;
