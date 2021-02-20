import { Router } from 'express';
//controllers
import { lendingController } from '../controllers/lendingController';

class LendingRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void {
        this.router.get('/',lendingController.list);
    }

}

const lendingRoutes = new LendingRoutes();
export default lendingRoutes.router;