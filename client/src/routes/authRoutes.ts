import { Router } from 'express';
//controllers
import { authControler } from '../controllers/authController';

class AuthRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void {
        this.router.post('/create',authControler.create);
        this.router.post('/authentication',authControler.authentication);
    }

}

const authRoutes = new AuthRoutes();
export default authRoutes.router;