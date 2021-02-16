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
  border-bottom: #3d80cc 2px solid;

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
  color: #3d80cc;
  font-size: 16px;
  text-decoration: none;
  margin-right: 50px;
`;

export const PageBody = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormBox = styled.div`
  padding: 20px;
  /*display: flex;
   justify-content: center;
  align-items: center; */
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  background-color: #fff;
  border-radius: 1%;
  height: 500px;
  box-shadow: 3px 3px 5px 6px #ccc; /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
`;

export const LeftBox = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 500px;
`;

export const InfoBox = styled.div`
  border: 0px solid #000;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  margin-top: 30px;
  width: 45%;
  height: 600px;
`;
