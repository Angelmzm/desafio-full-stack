import { useContext } from "react";
import Modal from "react-modal";
import { ContactContext } from "../../context/contactContext/contactContext";
import ModalUpdateContact from "./ModalUpdateContact";

import { ModalContainer } from "../Users/style"

const ModalOpenSettingsContact = () => {
  const {modalSettingsContactIsOpen, openModalUpdateContact, openModalDeleteContact, closeModal  } = useContext(ContactContext);

  return (
      <Modal isOpen={modalSettingsContactIsOpen} onRequestClose={closeModal} className="modal">
        <ModalContainer>
          <button onClick={openModalUpdateContact}>
            Atualizar contato
          </button>
          <button onClick={openModalDeleteContact}>
            Deletar contato
          </button>
        </ModalContainer>
        <ModalUpdateContact />
      </Modal>
  )
}

export default ModalOpenSettingsContact
