import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../Errors/appErrosr"


const userListOneService = async (id:string) => {
    const userRepository= AppDataSource.getRepository(User)
    const user= await userRepository.findOneBy({id})

    if(!user){
        throw new AppError( 401, "Can't found user")
    }
    
    return user
}

export default userListOneService