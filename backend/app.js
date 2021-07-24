import createError from 'http-errors';
import express from 'express';
import path from 'path';
import session from "express-session"
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import fs from "fs";
import path from "path"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()


import usersRouter from './routes/users';
import providersRouter from "./routes/providers"
import scheduleRoute from "./routes/scheduleRoute"

class App{

    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
        this.notFound();
        this.backEndErrors();
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(logger('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cookieParser());
        this.app.use(session({
            secret: process.env.SECRET_SESSION,
            resave: false,
            saveUninitialized: true
        }));
        this.app.use(
            "/files",
            express.static(path.resolve(__dirname, "public", "uploads"))
        )
        this.app.use(express.static(path.join(__dirname, 'public')));
    }

    routes(){
        this.app.use('/users', usersRouter );  
        this.app.use("/providers", providersRouter)      
        this.app.use("/schedule", scheduleRoute) 
    }

    notFound(){
        this.app.use(function(req, res, next) {
            next(createError(404));
        });
    }

    backEndErrors(){
        this.app.use(function(err, req, res, next) {
            // set locals, only providing error in development
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};
          
            // render the error page
            res.status(err.status || 500);
            res.render('error');
          });
    }

}

export default new App()