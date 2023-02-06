import AppDataSource from "../../data-source";
import { IUserLogin } from "../../interfaces/users";
import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AppError } from "../../Errors/appErrosr";

const userLoginService =async ( {email, password}:IUserLogin ) => {
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({email: email})

    if(!user){
        throw new AppError(403,'Invalid user or password')
    }

    if(!bcrypt.compareSync(password, user.password)){
        throw new AppError(403,"Wrong email/password")
    }
    const token = jwt.sign({
        email: user.email
    },
    process.env.SECRET_KEY as string,
    {
        expiresIn: '24h',
        subject: `${user.id}`
    }
)

return{user, token }

}

export default userLoginService
