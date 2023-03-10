import { Request, Response } from "express";
import { AppError, handleError } from "../../Errors/appErrosr";
import userListService from "../../services/users/userList.service";

const userListController = async (req: Request, res: Response) => {
  try {

    const users = await userListService()

    return res.status(200).json(users)

  } catch (err) {
    if (err instanceof AppError) {
        handleError(err, res)
    }
}
};

export default userListController
