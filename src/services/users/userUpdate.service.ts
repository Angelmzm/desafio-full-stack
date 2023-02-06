import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUserUpdate } from "../../interfaces/users"
import bcrypt from "bcrypt"
import { AppError } from "../../Errors/appErrosr"

const userUpdateService = async (id:string, {name, email, password, number}:IUserUpdate) => {
    const userRepository= AppDataSource.getRepository(User)
    const findUser= await userRepository.findOneBy({id})

    if(!findUser){
        throw new AppError(401, "Can't found user")
    }

     await userRepository.update(
        findUser.id,
        {
            name:name ? name:findUser.name,
            email:email ? email:findUser.email,
            password:password ? await bcrypt.hash(password, 10) : findUser.password,
            number: number ? number:findUser.number
        }
    )
    
    const user= await userRepository.findOneBy({id})

    const newUser= {
        name: user?.name,
        email: user?.email,
        number: user?.number
    }

    return newUser
}

export default userUpdateService