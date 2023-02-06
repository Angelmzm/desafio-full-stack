import Modal from "react-modal";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ContactContext } from "../../context/contactContext/contactContext";
import { IContactCreate } from "../../context/contactContext/contactContext";
import { ModalContainer, ModalForm, ModalHeader } from "./style";
import "../Contacts/style.css"
const ModalContact = () => {
  const { modalAddContactIsOpen, closeModal, createContact } = useContext(ContactContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    number: yup.string().required("Contato obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactCreate>({ resolver: yupResolver(formSchema) });

  return (
    <>
      <Modal isOpen={modalAddContactIsOpen} onRequestClose={closeModal} className="modal">
      <ModalContainer>
          <ModalHeader>
            <h1> Adicionar Contato</h1>
            <button onClick={closeModal}> x </button>
          </ModalHeader>
        <ModalForm onSubmit={handleSubmit(createContact)} className="formCadastro">
          <p> Nome Completo</p>
          <input placeholder="Digite aqui o nome" {...register("name")} />
          {errors.name?.message}

          <p> Email</p>
          <input placeholder="Digite aqui o email" {...register("email")} />
          {errors.email?.message}

          <p> Contato</p>
          <input placeholder="Digite aqui o telefone" {...register("number")} />
          {errors.number?.message}

          <button type="submit">Adicionar</button>
        </ModalForm>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default ModalContact;
