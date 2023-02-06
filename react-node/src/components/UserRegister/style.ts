import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;

  .header {
    width: 250px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 25px 10px 20px 10px;
    img {
    }
    button {
      width: 50px;
      height: 30px;
      background-color: #f8f9fa;
      color: #8a2be2;
      font-size: 14px;
      border-radius: 5px;
      border: #8a2be2 solid 1px;
      margin-right: 10px;
    }
  }
`;

export const ContainerForm = styled.div`
  background-color: #f8f8fa;
  width: 250px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.5);

  .headerForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 15px;

    h1 {
      color: #8a2be2;
      font-size: 16px;
    }
    p {
      color: #868e96;
      font-size: 12px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 15px;

  p {
    color: #8a2be2;
    font-size: 10px;
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
`;
