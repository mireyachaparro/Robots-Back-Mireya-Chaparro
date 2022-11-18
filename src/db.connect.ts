import mongoose from 'mongoose';
import { USER, CLUSTER, PASSWD } from './config.js';

export function dbConnect() {
    const DBName = process.env.NODE_ENV !== 'test' ? 'W7CH5' : 'W7CH5Testing';
    const uri = `mongodb+srv://${USER}:${PASSWD}@${CLUSTER}/w7ch5x?retryWrites=true&w=majority`;
    return mongoose.connect(uri);
}
