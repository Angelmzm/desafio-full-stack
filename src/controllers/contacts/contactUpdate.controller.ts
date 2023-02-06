import { Request, Response } from "express";
import { AppError, handleError } from "../../Errors/appErrosr";
import contactUpdateService from "../../services/contacts/contactUpdate.service";


const contactUpdateController= async (req:Request, res: Response) => {
    try {
        const{id, name, email, number}= req.body

        const updatedContact= await contactUpdateService(id,{name, email, number})

        return res.json(updatedContact)

    } catch (err) {
        if (err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default contactUpdateController