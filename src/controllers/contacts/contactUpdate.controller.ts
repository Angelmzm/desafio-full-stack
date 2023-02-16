import { Request, Response } from "express";
import { AppError, handleError } from "../../Errors/appErrosr";
import contactUpdateService from "../../services/contacts/contactUpdate.service";


const contactUpdateController= async (req:Request, res: Response) => {
    try {

        return res.json()

    } catch (err) {
        if (err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default contactUpdateController