import { Router } from "express";

import userCreateController from "../controllers/users/userCreate.controller";
import userListController from "../controllers/users/userList.controller";
import userLoginController from "../controllers/sessions/userLogin.controller";
import userListOneController from "../controllers/users/userListOne.controller";
import ensureAuthMiddleware from "../middlewares/userAuthorization.middleware";
import userDeleteController from "../controllers/users/userDelete.controller";
import userAuthorizationMiddleware from "../middlewares/userAuthorization.middleware";
import userUpdateController from "../controllers/users/userUpdate.controllers";





const routes = Router();

routes.post("/users", userCreateController);
routes.post("/login", userLoginController);
routes.get("/users", userAuthorizationMiddleware , userListController);
routes.get("/users/me",  userAuthorizationMiddleware, userListOneController);
routes.delete("/users", userAuthorizationMiddleware ,userDeleteController);
routes.patch("/users", userAuthorizationMiddleware ,userUpdateController)

export default routes;
