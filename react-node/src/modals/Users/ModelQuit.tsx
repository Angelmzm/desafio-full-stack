import Modal from "react-modal";
import { useContext } from "react";
import { AuthContext } from "../../context/userContext/userContext";
import ModalUpdateUser from "./ModalUpdate";
import { useNavigate } from "react-router-dom";
import { ModalDeleteContainer } from "./style";
const ModalQuitUser = () => {
  const { modalQuitIsOpen, closeModal } = useContext(AuthContext);

  let navigate = useNavigate();

  function nav() {
    window.localStorage.clear();
    navigate("/");
  }

  return (
    <>
      <Modal
        isOpen={modalQuitIsOpen}
        onRequestClose={closeModal}
        className="modal"
      >
        <ModalDeleteContainer>
          <p>Tem certeza que deseja sair?</p>
          <div>
          <button className="btnSair" onClick={nav}>
            Sair
          </button>
          <button onClick={closeModal}> cancelar </button>
          </div>
        </ModalDeleteContainer>

        <ModalUpdateUser />
      </Modal>
    </>
  );
};

export default ModalQuitUser;
