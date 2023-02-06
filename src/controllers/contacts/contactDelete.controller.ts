import { Request, Response } from 'express'
import { AppError, handleError } from '../../Errors/appErrosr'
import contactDeleteService from '../../services/contacts/contacDelete.service'

    
const contactDeleteController = async (req: Request, res: Response) => {
    
    try {

        const id= req.params.id

        await contactDeleteService(id)

        return res.status(204).json()

    } catch (err) {
        if (err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default contactDeleteController