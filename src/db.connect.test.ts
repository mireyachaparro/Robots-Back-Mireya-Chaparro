import { dbConnect } from './db.connect.js';
import mongoose from 'mongoose';
describe('when we connect', () => {
    test('then it should return a typeof mongoose', async () => {
        const result = await dbConnect();
        expect(typeof result).toBe(typeof mongoose);
        mongoose.disconnect();
    });

    test('when NODE_ENV is different to "test"', () => {
        process.env.NODE_ENV = 'W7CH5';
        const result = dbConnect();
        expect(result).toBeInstanceOf(Promise);
        mongoose.disconnect();
    });

    test('when NODE_ENV is "test"', () => {
        process.env.NODE_ENV = 'W7CH5W7CH5Testing';
        const result = dbConnect();
        expect(result).toBeInstanceOf(Promise);
        mongoose.disconnect();
    });
});
