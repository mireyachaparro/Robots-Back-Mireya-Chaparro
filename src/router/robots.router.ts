import { Router } from 'express';
import { RobotController } from '../controller/robot.controller.js';
// import { UserController } from '../controller/user.js';
import { RobotRepository } from '../data/robot.repository.js';
import { logged } from '../middlewares/interceptors.js';
// import { UserRepository } from '../repositories/user.js';

export const robotRouter = Router();

const controller = new RobotController(new RobotRepository());
// const userController = new UserController(new UserRepository());

robotRouter.get('/', controller.getAll.bind(controller));
robotRouter.get('/:id', logged, controller.get.bind(controller));
robotRouter.post('/create', logged, controller.post.bind(controller));
robotRouter.patch('/update/:id', logged, controller.patch.bind(controller));
robotRouter.delete('/delete/:id', logged, controller.delete.bind(controller));
