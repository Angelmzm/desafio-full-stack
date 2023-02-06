import { Request, Response } from 'express'
import { AppError, handleError } from '../../Errors/appErrosr'
import contactCreateService from '../../services/contacts/contactCreate.service'


const contactCreateController = async (req: Request, res: Response) => {

    try {

        const userId= req.user.id
        
        const { name, email, number}= req.body

        const contact= await contactCreateService(userId, { name, email, number})

        return res.status(201).json(contact)

    } catch (err) {

        if (err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default contactCreateController