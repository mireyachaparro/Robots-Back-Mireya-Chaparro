import mongoose from 'mongoose';
import { stringify } from 'querystring';
import { dbConnect } from '../db.connect.js';
import { RobotRepository } from './robot.repository.js';

const mockData = [
    {
        name: 'prueba1',
        img: '123.jpg',
        speed: 1,
        resistance: 2,
        date: '1999',
    },
    {
        name: 'prueba2',
        img: '456.jpg',
        speed: 3,
        resistance: 4,
        date: '2000',
    },
];
describe('Given RobotRepository', () => {
    describe('When we instantiate it', () => {
        const repository = new RobotRepository();
        let testIds: Array<string>;

        beforeAll(async () => {
            await dbConnect();
            await repository.getModel().deleteMany();
            await repository.getModel().insertMany(mockData);
            const data = await repository.getModel().find();
            testIds = [data[0].id, data[1].id];
        });
        afterAll(() => {
            mongoose.disconnect();
        });

        test('Then getAll should have been called', async () => {
            const result = await repository.getAll();
            expect(result[0].name).toEqual(mockData[0].name);
        });

        test('Then post should have been called', async () => {
            const newRobot = {
                name: 'prueba3',
                img: '789.jpg',
                speed: 5,
                resistance: 6,
                date: '2001',
            };
            const result = await repository.post(newRobot);
            expect(result.name).toEqual(newRobot.name);
        });
        test('Then delete...', async () => {
            const result = await repository.delete(testIds[0]);
            expect(result).toEqual({ id: testIds[0] });
        });
        test('Then if id is bad formated delete should throw an error', async () => {
            expect(async () => {
                await repository.delete(2);
            }).rejects.toThrowError(mongoose.Error.CastError);
        });
    });
});
