import * as express from 'express';
import { Expression } from 'typescript';
const app = express();

function loggerMiddleware(request: express.Request,
    response: express.Response, next)
    {
        console.log(`${request.method} ${request.path}`);
        next();
    }

app.use(loggerMiddleware);    

app.get('/',(req,res)=>{
    res.send('hello typscript');
});

app.listen(5000);