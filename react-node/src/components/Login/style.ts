import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 35px 10px 20px 10px;

  margin-top: 10%;
`;

export const ContainerForm = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f8fa;
  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.5);

  h1 {
    color: #8a2be2;
    font-size: 16px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  p {
    color: #8a2be2;
    font-size: 12px;
    text-align: left;
  }
  input {
    width: 220px;
    height: 40px;
    color: #f8f9fa;
    font-size: 12px;
    background-color: #f8f9fa;
    border: none;
    border-bottom: #8a2be2 solid 1px;
  }

  button {
    width: 220px;
    height: 40px;
    background-color: #8a2be2;
    color: #f8f9fa;
    font-size: 14px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }

  .descricaoLogin {
    text-align: center;
    color: black;
    font-size: 12px;
  }

  .btnCadastrarLogin {
    width: 220px;
    height: 40px;
    background-color: #f8f9fa;
    color: #8a2be2;
    font-size: 14px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: #8a2be2 solid 1px;
    border-radius: 8px;
    cursor: pointer;
  }
`;
