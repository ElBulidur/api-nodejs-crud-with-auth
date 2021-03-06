import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userDeleteSelfService from "../../services/user/userDeleteSelf.service";

const userDeleteSelfController = async (req: Request, res: Response) => {
  try {
    const email = req.userEmail;

    await userDeleteSelfService(email);
    return res.status(200).json({ message: "User deleted with success!" });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default userDeleteSelfController;
