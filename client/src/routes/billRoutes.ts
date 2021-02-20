import { Router } from 'express';
//controllers
import { billController } from '../controllers/billControllers';

class BillRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void {
    }

}

const billRoutes = new BillRoutes();
export default billRoutes.router;