import { Router } from 'express';
//controllers
import { categoryController } from '../controllers/categoryControllers';

class CategoryRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void {
        this.router.get('/',categoryController.list);
        this.router.post('/',categoryController.create);
        this.router.put('/:id',categoryController.update);
        this.router.delete('/:id',categoryController.delete);
    }

}

const categoryRoutes = new CategoryRoutes();
export default categoryRoutes.router;