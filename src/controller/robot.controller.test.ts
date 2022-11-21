import { NextFunction, Request, Response } from 'express';
import { RobotRepository } from '../data/robot.repository';
import { RobotController } from './robot.controller';

jest.mock('../data/robot.repository');

describe('Given RobotController', () => {
    RobotRepository.prototype.getAll = jest.fn().mockResolvedValue(['r2d2']);
    const repository = new RobotRepository();

    const robotController = new RobotController(repository);
    const req: Partial<Request> = {};
    const resp: Partial<Response> = {
        json: jest.fn(),
    };
    const next: NextFunction = jest.fn();

    const mockRobot = {
        name: 'prueba1',
        img: '123.jpg',
        speed: 1,
        resistance: 2,
        date: '1999',
    };

    test('Then ... getAll', async () => {
        await robotController.getAll(req as Request, resp as Response, next);
        expect(resp.json).toHaveBeenCalledWith({ robots: ['r2d2'] });
    });

    test('Then ... get one', async () => {
        await robotController.get(req as Request, resp as Response, next);
        expect(resp.json).toHaveBeenCalledWith({ robots: ['r2d2'] });
    });

    // test('Then ... post', async () => {
    //     await robotController.getAll(req as Request, resp as Response, next);
    //     expect(resp.json).toHaveBeenCalledWith({ robots: ['r2d2'] });
    // });

    // test('Then ... delete', async () => {
    //     await robotController.getAll(req as Request, resp as Response, next);
    //     expect(resp.json).toHaveBeenCalledWith({ robots: ['r2d2'] });
    // });
});
