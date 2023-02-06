import { Routes, Route } from "react-router-dom";

import Login from "../components/Login/Login";
import MainScreen from "../components/MainScreen/MainScreen";
import UserRegister from "../components/UserRegister/userRegister";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />  
      <Route path="/register" element={<UserRegister />}/>
      <Route path="/main" element={<MainScreen />} />

    </Routes>
  );
};

export default Rotas;