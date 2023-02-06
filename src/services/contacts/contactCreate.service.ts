import { Contact } from "../../entities/contact.entity"
import { User } from "../../entities/user.entity"
import AppDataSource from "../../data-source"
import { AppError } from "../../Errors/appErrosr"
import { IContactCreate } from "../../interfaces/contact"

const contactCreateService = async (userId:string, { name,email,number }: IContactCreate) => {
    
    const userRepository = AppDataSource.getRepository(User)
    const contactRepository = AppDataSource.getRepository(Contact)

    const user = await userRepository.findOne({where: {id: userId}})
    if( !user){
        throw new AppError(404, "user not found")
    }

    const contact = contactRepository.create({name:name, email:email, number:number, user})
    await contactRepository.save(contact)

    return contact
}

export default contactCreateService