import { createContext, Dispatch, ReactNode, SetStateAction } from "react";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export interface IUser {
    id: string
    name: string
    email: string
    number: string
    createdAt: Date
    
}

export interface IUserRegister {
    name: string
    email: string
    number: string
    password: string
}

export interface IUserLogin{
    email: string
    password: string
}

export interface IUserUpdate {
    name?: string
    email?: string
    password?: string
    number?: string
}


interface IUserProviderProps {
    children: ReactNode
}

interface IUserContext {
    user: IUser;
    setUser: Dispatch<SetStateAction<IUser>>
    login: (data: { email: string; password: string; }) => void
    userRegister: (data: IUserRegister) => void
    updateUser: ( data: IUserUpdate) => void
    deleteUser: () => void
    openModalSettings: () => void
    openModalUpdate: () => void
    openModalDelete: () => void
    openModalQuit: () => void
    closeModal: () => void
    modalSettingsIsOpen: boolean
    modalUpdateIsOpen: boolean
    modalDeleteIsOpen: boolean
    modalQuitIsOpen: boolean
    

}
export const AuthContext = createContext<IUserContext>({} as IUserContext)

const AuthProvider = ({ children }: IUserProviderProps) => {


    const [user, setUser] = useState<IUser>({} as IUser)
    const [modalSettingsIsOpen, setSettingsIsOpen] = useState(false);
    const [modalUpdateIsOpen, setUpdateIsOpen] = useState(false);
    const [modalDeleteIsOpen, setDeleteIsOpen] = useState(false);
    const [modalQuitIsOpen, setQuitIsOpen] = useState(false);
    

    function openModalSettings() {
        setSettingsIsOpen(true)

    }

    function openModalUpdate() {
        setUpdateIsOpen(true)
    }

    function openModalDelete() {
        setDeleteIsOpen(true)
    }

    function openModalQuit() {
        setQuitIsOpen(true)
    }
  
    function closeModal() {
        setSettingsIsOpen(false)
        setUpdateIsOpen(false)
        setDeleteIsOpen(false)
        setQuitIsOpen(false)
    }


    let navigate = useNavigate();
    
    function userRegister(data: IUserRegister) {
        api
            .post("/users", data)
            .then((response:any) => {
                console.log(response.data);
                navigate("/")
            })
            .catch((err:any) => {
                console.log(err);
            });
    }

    function login(data: IUserLogin ) {
        api
            .post("/login", data)
            .then((response:any) => {
                console.log("data", response.data.user);
                console.log("user",response.data.user.user)
                setUser( response.data.user.user);
                console.log("user", user)
                window.localStorage.clear();
                window.localStorage.setItem("token", response.data.user.token);
                window.localStorage.setItem("userId", response.data.user.user.id);
                navigate("/main");
            })
            .catch((err:any) => {
                console.log("aqui",err);
            });
    }

    function updateUser(data: IUserUpdate) {
        
        api
          .patch("/users", data)
          .then((response:any) => {
            console.log("data", response.data.user);
            setUser(response.data)
          })
          .catch((err) => {
            console.log(err);
          });
      }

      

      function deleteUser() {
        
        api
          .delete("/users")
          .then((response:any) => {
            console.log("deleted")
          })
          .catch((err) => {
            console.log(err);
          });
      }


    useEffect(() => {

        const token = localStorage.getItem("token");
        const userId = localStorage.getItem('userId')

        async function Profile() {
            if (token) {
                try {
                    await api.get("/users/me")
                    .then((response) => {
                        console.log("ResponseUser", response)
                        console.log("user",response.data);
                        setUser(response.data)
                        });
                } catch (error) {
                    console.log(error);
                    localStorage.removeItem(token)
                    localStorage.removeItem(userId!)
                }
            }
        }
        Profile()
        
    }, []);

    return (
        <AuthContext.Provider value={{ user, 
        login, 
        userRegister, 
        setUser, 
        updateUser,
        deleteUser,
        openModalSettings,
        openModalUpdate,
        openModalDelete,
        openModalQuit,
        closeModal,
        modalSettingsIsOpen,
        modalUpdateIsOpen,
        modalDeleteIsOpen,
        modalQuitIsOpen,

         }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
