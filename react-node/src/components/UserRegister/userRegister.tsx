import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { Container, ContainerForm, Form } from "./style";
import { AuthContext, IUserRegister } from "../../context/userContext/userContext";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {

    const { userRegister } = useContext(AuthContext);

    let navigate = useNavigate();

    function nav() {
      window.localStorage.clear();
      navigate("/");
    }
  
    const formSchema = yup.object().shape({
      name: yup.string().required("Nome obrigatório"),
      email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
      password: yup.string().required("Senha obrigatória"), 
      number: yup.string().required("Contato obrigatório"),
    });
  
    const {register, handleSubmit, formState: { errors }, } = useForm<IUserRegister>({ resolver: yupResolver(formSchema),});
  
    return (
      <Container>
        <div className="header">
          <button className="btnVoltar" onClick={nav}> Voltar</button>
        </div>
  
        <ContainerForm className="containerForm">
          <div className="headerForm">
            <h1 className="h1Cadastro"> Crie sua conta</h1>
            <p className="descricaoCadastro"> Rapido e grátis, vamos nessa</p>
          </div>
  
          <Form onSubmit={handleSubmit(userRegister)} className="formCadastro">
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
  
            <button type="submit">Cadastrar</button>
          </Form>
        </ContainerForm>
      </Container>
    );
  };
  
  export default UserRegister;
  

