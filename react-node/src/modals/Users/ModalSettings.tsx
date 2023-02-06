import Modal from "react-modal";
import { useContext } from "react";
import { AuthContext } from "../../context/userContext/userContext";
import ModalUpdateUser from "./ModalUpdate";
import ModalDeleteUser from "./ModalDelete";
import ModalQuitUser from "./ModelQuit";

import { ModalContainer } from "./style";
import "../Contacts/style.css";

const ModalOpenSettings = () => {
  const {
    modalSettingsIsOpen,
    openModalUpdate,
    openModalDelete,
    openModalQuit,
    closeModal,
  } = useContext(AuthContext);

  return (
    <>
      <Modal
        isOpen={modalSettingsIsOpen}
        onRequestClose={closeModal}
        className="modal"
      >
        <ModalContainer>
          <button onClick={openModalUpdate}>Atualizar perfil</button>
          <button onClick={openModalDelete}>Deletar perfil</button>
          <button onClick={openModalQuit}>Sair</button>
        </ModalContainer>
        <ModalUpdateUser />
        <ModalDeleteUser />
        <ModalQuitUser />
      </Modal>
    </>
  );
};

export default ModalOpenSettings;
