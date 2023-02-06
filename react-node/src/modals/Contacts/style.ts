import styled from "styled-components";
 
export const ModalContainer = styled.div`
  background-color: #f8f9fa;
  width: 50vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
 
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 290px;
  height: 40px;
  border-bottom: #8a2be2 solid 1px;
 
  h1 {
    font-size: 20px;
    color: black;
    margin-left: 10px;
    
  }
  button {
    font-size: 25px;
    color: #8a2be2;
    background-color: #f8f8f8;
    border: none;
    cursor: pointer;
    margin-right: 5px;
  }
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
 
  p {
    font-size: 20px;
    color: #8a2be2;
    margin: 15px 10px 5px 15px;
  }
  input{
    width: 265px;
    height: 30px;
    margin: 15px 10px 5px 15px;
    color: #8a2be2;
    background-color:#f8f9fa ;
    margin: 15px 10px 5px 15px;
    

  }
 
  input::placeholder{
    color: black;
    border-bottom: #8a2be2 solid 1px;
   
 
}
input:placeholder-shown {
   border: 1px solid #f8f9fa;
}

button{
  width: 265px;
  height: 35px;
  margin: 15px 10px 5px 15px;
  color: #f8f9fa;
  background-color:#8a2be2 ;
  border: none;
  border-radius: 8px;
  font-size:25px;
}
 
`;
 