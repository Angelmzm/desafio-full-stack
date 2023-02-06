import AppDataSource from "../../data-source"
import { Contact } from "../../entities/contact.entity"
import { User } from "../../entities/user.entity"
import { AppError } from "../../Errors/appErrosr"

const contactListService = async(userId: string) => {

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({relations: {contacts: true}, where: { id: userId }})

    if(!user){
        throw new AppError(404, 'user not found')
    }

    return user

}

export default contactListService