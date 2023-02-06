import { User} from "../../entities/user.entity";

import { IUserCreate, IUser } from "../../interfaces/users";
import { v4 as uuidv4 } from "uuid"
import AppDataSource from "../../data-source";
import bcrypt from "bcrypt";
import { AppError } from "../../Errors/appErrosr";

const userCreateService = async ({name, email, number, password}: IUserCreate) => {

    const userRepository = AppDataSource.getRepository(User) 

    const users = await userRepository.find()

    const emailAlreadyExists = users.find(user => user.email === email)

    if (emailAlreadyExists) {

        throw new AppError(409, "Email already exists")
    }

    const user= new User()
    
    user.name= name
    user.email= email
    user.number= number
    user.password= bcrypt.hashSync(password, 10)
	
    userRepository.create(user)
    await userRepository.save(user)

    return user

}

export default userCreateService