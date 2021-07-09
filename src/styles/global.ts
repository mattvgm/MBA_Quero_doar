import { createGlobalStyle } from "styled-components";
import hex from "../assets/hex-pattern.jpg";
import bg from "../assets/path10.png";

export default createGlobalStyle`

body{
  background-color: #F0F0F2;
  color:#2360a6;
  -webkit-font-smoothing:antialiased;
  font-family: 'Nunito', sans-serif;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: right bottom;
  /* background-image: url(${hex});
  background-size: 400px;
  background-color: rgba(255,255,255,.2); */
}
`;
