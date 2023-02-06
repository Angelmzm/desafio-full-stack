import Modal from "react-modal";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ContactContext, IContactUpdate } from "../../context/contactContext/contactContext";
import { ModalContainer, ModalForm, ModalHeader } from "./style";
import "../Contacts/style.css"

const ModalUpdateContact = () => {
  const {updateContact, modalUpdateContactIsOpen, closeModal} = useContext(ContactContext)

  const formSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email("E-mail inválido"),
    number: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactUpdate>({ resolver: yupResolver(formSchema) });

  return (
    <>
      <Modal isOpen={modalUpdateContactIsOpen} onRequestClose={closeModal} className="modal">
        <ModalContainer>
        <ModalHeader>
            <h1> Atualizar Perfil</h1>
            <button onClick={closeModal}> x </button>
          </ModalHeader>
          <ModalForm onSubmit={handleSubmit(updateContact)} className="formCadastro">
            <p> Nome Completo</p>
            <input placeholder="Digite aqui seu nome" {...register("name")} />
            {errors.name?.message}

            <p> Email</p>
            <input placeholder="Digite aqui seu email" {...register("email")} />
            {errors.email?.message}

            <p> Contato</p>
            <input placeholder="Opção de contato" {...register("number")} />
            {errors.number?.message}

            <button type="submit">Cadastrar</button>
          </ModalForm>
        </ModalContainer>
      </Modal>
    </>
  )
}

export default ModalUpdateContact
