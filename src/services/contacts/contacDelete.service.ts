import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";

const contactDeleteService = async (id: string) => {
    const contactRepository = AppDataSource.getRepository(Contact)
    const contact= await contactRepository.findOneBy({id})

    if(!contact){
        throw new Error("contact not found")
    }

    await contactRepository.delete(contact!.id)

    return true
}

export default contactDeleteService