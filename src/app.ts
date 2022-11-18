import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { CustomError } from './interfaces/error.js';
import { robotRouter } from './router/robots.router.js';

export const app = express();
app.disable('x-powered-by');

const corsOptions = {
    origin: '*',
};
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());

app.use((req, res, next) => {
    const origin = req.header('Origin') || '*';
    res.setHeader('Access-Control-Allow-Origin', origin as string);
    next();
});

app.get('/', (_req, res) => {
    res.send(
        `<h1>API Express de robots</h1><br>
        <p>/robots -> devuelve un array con todos los robots de la BD</p>
        <p>/robots/:idRobot -> devuelve un robot de la BD por id</p>
        <p>/robots/create -> recibe un robot (sin id), lo crea en la BD y devuelve el robot recién creado</p>
        <p>/robots/update -> recibe un robot, modifica en la BD el robot con la misma id que el recibido, y devuelve el robot modificado</p>
        <p>/robots/delete/:idRobot -> elimina de la BD un robot por id y devuelve un objeto con la id</p>`
    ).end();
});

app.use('/robots', robotRouter);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use(
    (error: CustomError, _req: Request, resp: Response, next: NextFunction) => {
        console.log(
            error.name,
            error.statusCode,
            error.statusMessage,
            error.message
        );
        let status = error.statusCode || 500;
        if (error.name === 'ValidationError') {
            status = 406;
        }
        const result = {
            status: status,
            type: error.name,
            error: error.message,
        };
        resp.status(status).json(result).end();
    }
);
