import mongoose from 'mongoose';
import { USER, CLUSTER, PASSWD } from './config.js';

export function dbConnect() {
    const DBName = process.env.NODE_ENV !== 'test' ? 'W8CH1' : 'W8CH1Testing';
    const uri = `mongodb+srv://${USER}:${PASSWD}@${CLUSTER}/${DBName}?retryWrites=true&w=majority`;
    console.log(uri);
    return mongoose.connect(uri);
}
