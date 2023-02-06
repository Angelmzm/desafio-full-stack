import { Router } from "express";

import contactCreateController from "../controllers/contacts/contactCreate.controller";
import contactDeleteController from "../controllers/contacts/contactDelete.controller";
import contactListController from "../controllers/contacts/contactList.controller";
import contactUpdateController from "../controllers/contacts/contactUpdate.controller";
import userAuthorizationMiddleware from "../middlewares/userAuthorization.middleware";




const routes = Router();

routes.post("/contacts",userAuthorizationMiddleware, contactCreateController)
routes.get("/contacts",userAuthorizationMiddleware,  contactListController)
routes.delete("/contacts/:id",userAuthorizationMiddleware, contactDeleteController)
routes.patch("/contacts/:id", userAuthorizationMiddleware, contactUpdateController)

export default routes;
