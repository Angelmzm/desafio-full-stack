import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUserUpdate } from "../../interfaces/users"
import bcrypt from "bcrypt"
import { AppError } from "../../Errors/appErrosr"
import { IContactUpdate } from "../../interfaces/contact"
import { Contact } from "../../entities/contact.entity"

const contactUpdateService = async (id:string, {name, email, number}:IContactUpdate) => {
    const contactRepository= AppDataSource.getRepository(Contact)
    const findcontact= await contactRepository.findOneBy({id})

    if(!findcontact){
        throw new AppError(401, "Can't found contact")
    }

     await contactRepository.update(
        findcontact.id,
        {
            name:name ? name:findcontact.name,
            email:email ? email:findcontact.email,
            number: number ? number:findcontact.number
        }
    )
    
    const contact= await contactRepository.findOneBy({id})

    const newcontact= {
        name: contact?.name,
        email: contact?.email,
        number: contact?.number
    }

    return newcontact
}

export default contactUpdateService