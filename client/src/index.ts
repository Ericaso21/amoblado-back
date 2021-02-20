import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParse from 'body-parser';

//routes
import authRoutes from './routes/authRoutes';
import productRoute from './routes/productRoute';
import categoryRoutes from './routes/categoryRoutes';
import billRoutes from './routes/billRoutes';
import lendingRoutes from './routes/lendingRoutes';
import reportRoutes from './routes/reportRoutes';

class Server {

    public app: Application

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    //config
    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(bodyParse.json({limit: '50mb'}));
        this.app.use(bodyParse.urlencoded({limit: '50mb',extended: true}));
    }
    //routes
    routes():void {
        this.app.use('/api/auth',authRoutes);
        this.app.use('/api/product',productRoute);
        this.app.use('/api/category',categoryRoutes);
        this.app.use('/api/bill',billRoutes);
        this.app.use('/api/lending',lendingRoutes);
        this.app.use('/api/report',reportRoutes);
    }
    //start 
    start():void {
        this.app.listen(this.app.get('port') , () => {
            console.log('Sever on port ' , this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();