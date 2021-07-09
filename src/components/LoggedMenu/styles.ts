import styled from "styled-components";

export const Container = styled.div`
  margin: 0px;
  padding: 0px;
  width: 600px;
  border: 0px solid #000;
`;

export const LeftBox = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 500px;

  ul {
    li {
      list-style-type: none;
      font-size: 32px;
    }
    a {
      text-decoration: none;
      color: #2360a6;
    }
  }
`;

export const Menubox = styled.div`
  border: 0px solid #000;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  margin-top: 30px;
  width: 25%;
  height: 600px;
`;
