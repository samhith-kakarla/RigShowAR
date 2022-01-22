import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send("RigShowAR");
});

app.listen(8000, () => console.log("app running"));

