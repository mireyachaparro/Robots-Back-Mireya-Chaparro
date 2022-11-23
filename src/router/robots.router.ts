import { Router } from 'express';
import { RobotController } from '../controller/robot.controller.js';
import { logged } from '../middlewares/interceptors.js';
import { RobotRepository } from '../repositories/robot.repository.js';
import { UserRepository } from '../repositories/user.repository.js';

export const robotRouter = Router();

const controller = new RobotController(
    RobotRepository.getInstance(),
    UserRepository.getInstance()
);

robotRouter.get('/', controller.getAll.bind(controller));
robotRouter.get('/:id', controller.get.bind(controller));
robotRouter.post('/', logged, controller.post.bind(controller));
robotRouter.patch('/:id', logged, controller.patch.bind(controller));
robotRouter.delete('/:id', logged, controller.delete.bind(controller));
