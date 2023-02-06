import Modal from "react-modal";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import {AuthContext,IUserUpdate} from "../../context/userContext/userContext";
import { ModalContainer, ModalForm, ModalHeader } from "../Contacts/style";
import "../Contacts/style.css"

const ModalUpdateUser = () => {
  const {updateUser, modalUpdateIsOpen, closeModal}= useContext(AuthContext)

  const formSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email("E-mail inválido"),
    password: yup.string(),
    number: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserUpdate>({ resolver: yupResolver(formSchema) });

  return (
    <>
      <Modal isOpen={modalUpdateIsOpen} onRequestClose={closeModal} className="modal">
        <ModalContainer>
          <ModalHeader>
            <h1> Atualizar Perfil</h1>
            <button onClick={closeModal}> x </button>
          </ModalHeader>
        <ModalForm onSubmit={handleSubmit(updateUser)} className="formCadastro">
          <p> Nome Completo</p>
          <input placeholder="Digite aqui seu nome" {...register("name")} />
          {errors.name?.message}

          <p> Email</p>
          <input placeholder="Digite aqui seu email" {...register("email")} />
          {errors.email?.message}

          <p> Senha</p>
          <input
            placeholder="Digite aqui sua senha"
            type="password"
            {...register("password")}
          />
          {errors.password?.message}

          <p> Contato</p>
          <input placeholder="Opção de contato" {...register("number")} />
          {errors.number?.message}

          <button type="submit">Atualizar</button>
        </ModalForm>
        </ModalContainer>
      </Modal>
    </>
  )
}

export default ModalUpdateUser
