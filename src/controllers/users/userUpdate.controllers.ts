import { Request, Response } from "express";
import { AppError, handleError } from "../../Errors/appErrosr";
import userUpdateService from "../../services/users/userUpdate.service";

const userUpdateController= async (req:Request, res: Response) => {
    try {
        const{name, email, password, number}= req.body

        const id= req.user.id

        const updateUser= await userUpdateService(id,{ name, email, password, number})

        return res.json(updateUser)

    } catch (err) {
        if (err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default userUpdateController