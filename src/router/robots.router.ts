import { Router } from 'express';
import { RobotController } from '../controller/robot.controller.js';
// import { UserController } from '../controller/user.js';
import { RobotRepository } from '../data/robot.repository.js';
// import { UserRepository } from '../repositories/user.js';

export const robotRouter = Router();

const controller = new RobotController(new RobotRepository());
// const userController = new UserController(new UserRepository());

robotRouter.get('/', controller.getAll.bind(controller));
robotRouter.get(
    '/:id',
    // esto da error(Could not get response, Error: read ECONNRESET)
    // userController.login.bind(controller),
    controller.get.bind(controller)
);
robotRouter.post('/create', controller.post.bind(controller));
robotRouter.patch('/update/:id', controller.patch.bind(controller));
robotRouter.delete('/delete/:id', controller.delete.bind(controller));
