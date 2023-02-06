import Modal from "react-modal";
import { useContext } from "react";
import {AuthContext} from "../../context/userContext/userContext";
import "../Contacts/style.css"
import { ModalDeleteContainer } from "./style";


const ModalDeleteUser = () => {
  const {modalDeleteIsOpen, deleteUser, closeModal  } = useContext(AuthContext);

  return (
      <Modal isOpen={modalDeleteIsOpen} onRequestClose={closeModal} className="modal">
        <ModalDeleteContainer>
          <p>
            Tem certeza que deseja excluir ser perfil?
            <p> essa ação não poderá ser desfeita</p>
          </p>
        <div>
          <button onClick={deleteUser}> excluir </button>
          <button onClick={closeModal}> cancelar </button>
        </div>
        </ModalDeleteContainer>
      </Modal>
  )
}

export default ModalDeleteUser
