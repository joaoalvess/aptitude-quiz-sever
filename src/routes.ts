import express from "express";

import UsersController from './controllers/UsersController'

const routes = express.Router();
const usersController = new UsersController()

routes.post("/createuser", usersController.create);

export default routes;