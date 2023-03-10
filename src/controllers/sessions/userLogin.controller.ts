import { Request, Response } from "express";
import { AppError, handleError } from "../../Errors/appErrosr";
import userLoginService from "../../services/sessions/userLogin.service";


const userLoginController = async (req: Request, res: Response) => {
  try {

    const {email, password} = req.body

    const user=  await userLoginService({email, password})
        
    return res.status(201).json({user})

  }catch (err) {
    if (err instanceof AppError) {
        handleError(err, res)
    }
}
};

export default userLoginController