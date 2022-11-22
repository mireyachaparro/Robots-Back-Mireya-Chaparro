import { Router } from 'express';
import { RobotController } from '../controller/robot.controller.js';
import { logged } from '../middlewares/interceptors.js';
import { RobotRepository } from '../repositories/robot.repository.js';
import { UserRepository } from '../repositories/user.repository.js';

export const robotRouter = Router();

const controller = new RobotController(
    new RobotRepository(),
    new UserRepository()
);

robotRouter.get('/', controller.getAll.bind(controller));
robotRouter.get('/:id', controller.get.bind(controller));
robotRouter.post('/create', logged, controller.post.bind(controller));
robotRouter.patch('/update/:id', logged, controller.patch.bind(controller));
robotRouter.delete('/delete/:id', logged, controller.delete.bind(controller));
