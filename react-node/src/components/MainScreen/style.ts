import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px #8a2be2;
  margin: 15px;

  button {
    width: 55px;
    height: 30px;
    border:none;
    border-bottom: #8a2be2 solid 1px  ;
    background-color: white;
    color: #8a2be2;
    font-size: 12px;
    margin: 20px 0px 20px 0px;
    cursor: pointer;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: #8a2be2 solid 1px;
  margin: 10px 0px 10px 0px;

  .name {
    color: black;
    font-size: 16px;
  }

  div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;

  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const Main = styled.main`


  .headerMain {
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    button{
      border: none;
      color: #8a2be2 ;
      background-color: white;
      font-size: 20px;
      height: 30px;
      border-bottom: #8a2be2 solid 1px;
    }

  }

  .list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px 0px 10px 180px ;
    border-radius: 2px;
    width: 920px;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.5);


    

    .teste{
      display: flex;
      justify-content: space-between;
      width: 900px;
    }
  }
 
  .listItem {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    margin: 10px 12px 8px 12px ;
    border-bottom: #8a2be2 solid 1px;
    width: 900px;
    
    h1 {
      font-size: 28px;
      color: black;
      margin: 5px 4px 5px 4px;
      text-align: left;
    }
    button {
        font-size: 20px;
        background-color: white;
        border: none;
        color: #8a2be2;
        cursor: pointer;
        margin-right: 20px;
        margin-bottom: 10px;
        
      }
  }

  .listAside {

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 900px;

    p {
      font-size: 23px;
      color: #868e96;
      margin: 5px 4px 5px 4px;
    }

      button {
        font-size: 20px;
        background-color: white;
        border: none;
        color: #8a2be2;
        cursor: pointer;
        
      }


    }
`