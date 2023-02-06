import { Header } from "./style";
import { Description } from "./style";
import { Main } from "./style";

import { useContext } from "react";
import { AuthContext } from "../../context/userContext/userContext";
import { ContactContext } from "../../context/contactContext/contactContext";

import ModalContact from "../../modals/Contacts/ModalContact";
import ModalOpenSettings from "../../modals/Users/ModalSettings";
import ModalOpenSettingsContact from "../../modals/Contacts/ModalSettingsContacts";
import ModalUpdateContact from "../../modals/Contacts/ModalUpdateContact";


const MainScreen = () => {
  const { openModalAddContact } = useContext(ContactContext);
  const { user, openModalSettings } = useContext(AuthContext);


  return (
    <div>
      <Header>
        <h1> Agenda</h1>
        <button className="BtnAdd" onClick={openModalSettings}> Opções</button>
      </Header>
      <Description>
        <p className="name"> Olá, {user.name} </p>
        <div>
        <p className="number"> Seu numero: {user.number}</p>
        <p className="email"> Seu email: {user.email}</p>
        </div>

      </Description>
      <Main>
        <div className="headerMain">
          <h1> Contatos </h1>
          <button className="BtnAdd" onClick={openModalAddContact}> adicionar contato +</button>
          
        </div>
        <Contacts />

        <ModalOpenSettings/>
        <ModalContact />
        <ModalOpenSettingsContact />
        <ModalUpdateContact />
      </Main>
    </div>
  );
};

export default MainScreen;

const Contacts = () => {
  const { contacts, deleteContact, openModalUpdateContact } = useContext(ContactContext);

  return (
    <div className="list">
      {contacts?.map((item) => (
        <div className="listItem" key={item.id}>
          <div className="teste">
          <h1> {item.name}</h1>
              <button
                onClick={() => {
                  deleteContact(item.id);
                }}>
              excluir 
               </button>
          </div>
          <div className="listAside">
            <p> número: {item.number} </p>
            <p> email: {item.email}</p>
              <button className="settings" onClick={openModalUpdateContact}> Atualizar </button>

          </div>
        </div>
      ))}
    </div>
  );
};
