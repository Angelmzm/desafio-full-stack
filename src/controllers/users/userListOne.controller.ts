import { Request, Response } from "express";
import { AppError, handleError } from "../../Errors/appErrosr";
import userListOneService from "../../services/users/userListOne.service";

const userListOneController = async (req: Request, res: Response) => {
  try {
    const id = req.user.id
    
    const user =  await userListOneService(id)
            
    return res.status(201).json(user)

  }catch (err) {
    if (err instanceof AppError) {
        handleError(err, res)
    }
}
};

export default userListOneController