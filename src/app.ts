import express from "express"
import { Request, Response, NextFunction} from 'express'

import userRoutes from "./routes/users.routes";
import contactRoutes from "./routes/contacts.routes";
import { AppError } from "./Errors/appErrosr";

const app = express();

app.use(express.json());

app.use(userRoutes);
app.use(contactRoutes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }
  
    console.error(err);
  
    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  });

app.listen(3001);
