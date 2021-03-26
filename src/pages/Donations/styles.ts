import styled from "styled-components";

export const Container = styled.div`
  margin: 0px;
  padding: 0px;
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

  ul {
    li {
      list-style-type: none;
      font-size: 32px;
    }
    a {
      text-decoration: none;
      color: #3d80cc;
    }
  }
`;

export const InfoBox = styled.div`
  border: 0px solid #000;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  margin-top: 30px;
  width: 65%;
  height: 600px;
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
