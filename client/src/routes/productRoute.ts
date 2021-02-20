import { Router } from 'express';
//controllers
import { productController } from '../controllers/productController';

class ProductRoute {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void {
        this.router.get('/sofaBed',productController.listSofaBed);
        this.router.get('/couch',productController.listCouch);
        this.router.get('/couchL',productController.listCouchL);
        this.router.get('/beds',productController.listBeds);
        this.router.get('/diningSe',productController.lisDiningSet);
        this.router.get('/table',productController.listTable);
        this.router.get('/chair',productController.listChair);
        this.router.get('/biffes',productController.listBiffes);
        this.router.get('/category',productController.listCategory);
        this.router.get('/:id',productController.getOne);
        this.router.post('/',productController.create);
        this.router.put('/:id',productController.update);
        this.router.delete('/:id',productController.delete);
    }

}

const productRoute = new ProductRoute();
export default productRoute.router;