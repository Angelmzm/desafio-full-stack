import { Request, Response } from "express";
import { AppError, handleError } from "../../Errors/appErrosr";
import contactListService from "../../services/contacts/contactList.service";

const contactListController = async (req: Request, res: Response) => {

    try {

        const userId = req.user.id

        const contacts = await contactListService(userId)

        return res.status(200).json(contacts)

    } catch (err) {

        if (err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default contactListController