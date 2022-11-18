import mongoose from 'mongoose';
import { dbConnect } from '../db.conect';
import { RobotRepository } from './robot.repository';

const mockData = [
    {
        name: 'R2-D2',
        img: 'RD2D.JPG',
        speed: 1,
        resistance: 2,
        date: '1977',
    },
    {
        name: 'HK-47',
        img: 'HK47.JPG',
        speed: 3,
        resistance: 4,
        date: '2003',
    },
];

describe('Given RobotRepository', () => {
    const repository = new RobotRepository();
    let testIds: Array<string>;
    beforeAll(async () => {
        await dbConnect();
        await repository.getModel().deleteMany();
        await repository.getModel().insertMany(mockData);
        const data = await repository.getModel().find();
        testIds = [data[0].id, data[1].id];
    });

    test('Then getAll should return the name of the first register', async () => {
        const result = await repository.getAll();
        expect(result[0].name).toEqual(mockData[0].name);
    });

    test('Then post should return the new object', async () => {
        const newRobot = {
            name: 'johnny',
        };
        const result = await repository.post(newRobot);
        expect(result.name).toEqual(newRobot.name);
    });

    // test('Then patch should return the object with the updated property', async () => {
    //     const updatedRobot = {
    //         name: 'Tachikomas',
    //     };
    //     const result = await repository.patch(testIds[0], updatedRobot);
    //     expect(result.name).toEqual(updatedRobot.name);
    // });

    test('Then delete should return an empty object', async () => {
        const result = await repository.delete(testIds[0]);
        expect(result).toBeUndefined();
    });

    afterAll(() => {
        mongoose.disconnect();
    });
});
