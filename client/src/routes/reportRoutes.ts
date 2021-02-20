import { Router } from 'express';
//controllers
import { reportController } from '../controllers/reportController';

class ReportRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
        this.router.post('/',reportController.list);
    }

    config():void {
    }

}

const reportRoutes = new ReportRoutes();
export default reportRoutes.router;