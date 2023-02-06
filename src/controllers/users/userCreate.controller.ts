import { Request, Response } from 'express'
import { AppError, handleError } from '../../Errors/appErrosr'
import userCreateService from '../../services/users/userCreate.service'

const userCreateController = async(req: Request, res: Response) => {

    try {
        const {name, email, number, password} = req.body

        const user = await userCreateService({name, email, number, password})

        return res.status(201).json(user)

    } catch (err) {
        if (err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default userCreateController