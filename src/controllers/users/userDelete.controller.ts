import { Request, Response } from 'express'
import { AppError, handleError } from '../../Errors/appErrosr'
import userDeleteService from '../../services/users/userDelete.service'
    
const userDeleteController = async (req: Request, res: Response) => {
    
    try {
        const id= req.user.id

        await userDeleteService(id)

        return res.status(204).json()

    } catch (err) {
        if (err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default userDeleteController
