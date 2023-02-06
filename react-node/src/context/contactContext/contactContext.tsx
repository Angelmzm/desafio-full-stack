import { createContext, ReactNode} from "react";
import { useState, useEffect } from "react";
import api from "../../services/api";

export interface IContact {
    id: string
    name: string
    email: string
    number: string
    createdAt: Date
    userId:string 
}

export interface IContactCreate {
    name: string
    email: string
    number: string
    userId:string
}

export interface IContactUpdate {
    name?: string
    email?: string
    number?: string
}

interface IContactProviderProps {
    children: ReactNode
  }

  
interface IContactContext {
    createContact: (data: IContactCreate) => Promise<void>
    closeModal: () => void
    contacts: IContact[]
    updateContact:(data: IContactUpdate) => void
    deleteContact: (id:string) => void
    openModalAddContact: () => void
    openModalSettingsContact: () => void
    openModalUpdateContact: () => void
    openModalDeleteContact: () => void
    modalAddContactIsOpen: boolean
    modalSettingsContactIsOpen: boolean
    modalUpdateContactIsOpen: boolean
    modalDeleteContactIsOpen: boolean
  }

export const ContactContext = createContext<IContactContext>({} as IContactContext);

const ContactProvider = ({children} : IContactProviderProps) => {
    
    const [contacts, setContact] = useState<IContact[]>([])
    const [modalAddContactIsOpen, setContactIsOpen] = useState(false);
    const [modalSettingsContactIsOpen, setSettingsIsOpen] = useState(false);
    const [modalUpdateContactIsOpen, setUpdateIsOpen] = useState(false);
    const [modalDeleteContactIsOpen, setDeleteIsOpen] = useState(false);
    
    function openModalAddContact() {
        setContactIsOpen(true)
    }

    function openModalSettingsContact() {
        setSettingsIsOpen(true)

    }

    function openModalUpdateContact() {
        setUpdateIsOpen(true)
    }

    function openModalDeleteContact() {
        setDeleteIsOpen(true)
    }

  
    function closeModal() {
        setContactIsOpen(false)
        setSettingsIsOpen(false)
        setUpdateIsOpen(false)
        setDeleteIsOpen(false)
    }


    const userId= localStorage.getItem("userId")
    
    async function createContact(data: IContactCreate) : Promise<void> {
        const token = localStorage.getItem("token");
        if (token) {
            console.log(token)
            try {
                await api.post("/contacts", data)
                .then( async (response) => {
                    console.log("data",response.data)
                    setContact([...contacts, response.data])
                    window.localStorage.setItem("contactId", response.data.id)
                })
            } catch (error) {
                console.log(error);
                localStorage.removeItem(token)
                localStorage.removeItem(userId!)
            }
        }
    }

    
    function updateContact(data: IContactUpdate) {
        
        api
        .patch("/contacts", data)
        .then((response:any) => {
            console.log("data", response.data.user);
            setContact(response.data)
        })
        .catch((err) => {
            console.log(err);
        });
    }
    
    function deleteContact(id: string) {
        
        api
          .delete(`/contacts/${id}`)
          .then(() => {
            })
          .catch((err) => {
            console.log(err);
          });
      }
    
    
        useEffect(() => {
    
            const token = localStorage.getItem("token");
            const userId = localStorage.getItem('userId')
    
            async function Contacts() {
                if (token) {
                    try {
                        await api.get("/contacts")
                            .then((response) => {
                                console.log("ResponseContact", response)
                                console.log(response.data);
                                setContact(response.data.contacts)
                                console.log(contacts)
                            });
                    } catch (error) {
                        console.log(error);
                        localStorage.removeItem(token)
                        localStorage.removeItem(userId!)
                    }
                }
            }
            Contacts()
        }, []);
        
    return (
        <ContactContext.Provider value={{  modalAddContactIsOpen, 
            openModalAddContact, 
            closeModal, 
            createContact, 
            contacts, 
            updateContact,
            deleteContact,
            openModalSettingsContact,
            openModalUpdateContact,
            openModalDeleteContact,
            modalSettingsContactIsOpen,
            modalUpdateContactIsOpen,
            modalDeleteContactIsOpen,
        
    }}>
            {children}
        </ContactContext.Provider>
      );
}

export default ContactProvider