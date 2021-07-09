import styled from "styled-components";

export const Container = styled.div`
  margin: 0px;
  padding: 0px;
`;

export const TopBar = styled.div`
  background-color: #e3e3e3;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2px;
  padding-right: 3rem;
  padding-left: 3rem;
  border-bottom: #2360a6 3px solid;

  .left {
    width: 30%;
  }
  .mid {
    width: 50%;
  }
  .right {
    width: 20%;
  }
`;

export const LinksBox = styled.div`
  border: 0px solid #000;
  margin: 5px;
  width: 30%;
`;

export const Linkable = styled.a`
  color: #2360a6;
  font-size: 16px;
  text-decoration: none;
  margin-right: 50px;
`;
