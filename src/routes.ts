import express from "express";

import UsersController from './controllers/UsersController'
import FormsController from './controllers/FormsController'

const routes = express.Router();
const usersController = new UsersController()
const formsController = new FormsController()

routes.post("/createuser", usersController.create);
routes.get("/users", usersController.index);
routes.get("/user/:id", usersController.show);

routes.post("/createform/:id", formsController.create);
routes.get("/form/:id", formsController.show);
routes.get("/form", formsController.index);

export default routes;