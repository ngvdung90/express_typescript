import express, { Request, Response, Application, NextFunction } from "express";
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import router from "./v1/routes";

const app: Application = express();

//init dbs 
// require('./v1/databases/init.mongodb')
// require('./v1/databases/init.redis')

//user middleware
app.use(helmet())
app.use(morgan('combined'))
// compress responses
app.use(compression())

// add body-parser
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

//router
app.use(router)

// Error Handling Middleware called

app.use((_req: Request, _res: Response, next: NextFunction) => {
    const error: Error = new Error("Not found");
    error.status = 404;
    next(error);
});


// error handler middleware
app.use((error: any, _req: Request, res: Response, _next: NextFunction) => {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || 'Internal Server Error',
        },
    });
});

export default app;