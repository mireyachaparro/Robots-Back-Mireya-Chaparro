import { NextFunction, Request, Response } from 'express';
import { RobotRepository } from '../data/robot.repository.js';

jest.mock('../data/robot.repository');

describe('Given Robot Controller', () => {
    // RobotRepository.prototype.getAll = jest.fn().mockResolvedValue(['r2d2']);
    // const repository = new RobotRepository();
    // const robotController = new robotController(repository);
    // const req: Partial<Request> = {};
    // const resp: Partial<Response> = {
    //     json: jest.fn(),
    // };
    // const next: NextFunction = jest.fn();
    // test('Then ... getAll', async () => {
    //     await robotController.getAll(req as Request, resp as Response, next);
    //     expect(resp.json).toHaveBeenCalledWith({ robots: ['r2d2'] });
    // });
});
