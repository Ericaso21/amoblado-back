import {Request, Response} from 'express';
import pool from '../database';

class ProductController {
    //list sofa cama
    public async listSofaBed (req: Request, res: Response) {
        const SodaBeb = await pool.query('SELECT c.category_name, p.product_id, p.product_name, p.stock, FORMAT(p.product_price,3) AS product_price, p.product_image, DATE_FORMAT(p.created_at, "%d/%m/%Y") as created_at FROM product p INNER JOIN category c ON p.category_id = c.category_id WHERE p.category_id = 1');
        res.json(SodaBeb);
    }
    // list sofa
    public async listCouch (req: Request, res: Response) {
        const couch = await pool.query('SELECT c.category_name, p.product_id, p.product_name, p.stock, FORMAT(p.product_price,3) AS product_price, p.product_image, DATE_FORMAT(p.created_at, "%d/%m/%Y") as created_at FROM product p INNER JOIN category c ON p.category_id = c.category_id WHERE p.category_id = 2');
        res.json(couch);
    }
    //list sofa l
    public async listCouchL (req: Request, res: Response) {
        const couchL = await pool.query('SELECT c.category_name, p.product_id, p.product_name, p.stock, FORMAT(p.product_price,3) AS product_price, p.product_image, DATE_FORMAT(p.created_at, "%d/%m/%Y") as created_at FROM product p INNER JOIN category c ON p.category_id = c.category_id WHERE p.category_id = 3');
        res.json(couchL);
    }
    //list camas 
    public async listBeds (req: Request, res: Response) {
        const beds = await pool.query('SELECT c.category_name, p.product_id, p.product_name, p.stock, FORMAT(p.product_price,3) AS product_price , p.product_image, DATE_FORMAT(p.created_at, "%d/%m/%Y") as created_at FROM product p INNER JOIN category c ON p.category_id = c.category_id WHERE p.category_id = 4');
        res.json(beds);
    }

    //list juego de comedor
    public async lisDiningSet (req: Request, res: Response) {
        const diningSet = await pool.query('SELECT c.category_name, p.product_id, p.product_name, p.stock, FORMAT(p.product_price,3) AS product_price , p.product_image, DATE_FORMAT(p.created_at, "%d/%m/%Y") as created_at FROM product p INNER JOIN category c ON p.category_id = c.category_id WHERE p.category_id = 5');
        res.json(diningSet);
    }
    //list mesa
    public async listTable (req: Request, res: Response) {
        const table = await pool.query('SELECT c.category_name, p.product_id, p.product_name, p.stock, FORMAT(p.product_price,3) AS product_price , p.product_image, DATE_FORMAT(p.created_at, "%d/%m/%Y") as created_at FROM product p INNER JOIN category c ON p.category_id = c.category_id WHERE p.category_id = 6');
        res.json(table);
    }
    //list sillas
    public async listChair (req: Request, res: Response) {
        const chair = await pool.query('SELECT c.category_name, p.product_id, p.product_name, p.stock, FORMAT(p.product_price,3) AS product_price , p.product_image, DATE_FORMAT(p.created_at, "%d/%m/%Y") as created_at FROM product p INNER JOIN category c ON p.category_id = c.category_id WHERE p.category_id = 7');
        res.json(chair);
    }
    //list biffes
    public async listBiffes (req: Request, res: Response) {
        const biffes = await pool.query('SELECT c.category_name, p.product_id, p.product_name, p.stock, FORMAT(p.product_price,3) AS product_price , p.product_image, DATE_FORMAT(p.created_at, "%d/%m/%Y") as created_at FROM product p INNER JOIN category c ON p.category_id = c.category_id WHERE p.category_id = 8');
        res.json(biffes);
    }
    //list biffes
    public async listCategory (req: Request, res: Response) {
        const category = await pool.query('SELECT category_id, category_name FROM category');
        res.json(category);
    }
    // get one product
    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const product = await pool.query('SELECT product_id, category_id, product_id, product_name, stock, FORMAT(product_price,3) AS product_price , product_image, DATE_FORMAT(created_at, "%d/%m/%Y") as created_at, DATE_FORMAT(updated_at, "%d/%m/%Y") as updated_at FROM product WHERE product_id = ?',[id]);
        if (product.length > 0) {
            return res.json(product[0]);
        } else {
            res.status(404).json({message: 'Producto no encontrado.'});
        }
    }
    // create product
    public async create (req: Request, res: Response) {
        if (req.body.product_name == '' || req.body.product_price == 0) {
            res.status(404).json({message: 'Todos los campos son obligarios'});
        } else {
            const sql = await pool.query('SELECT * FROM product WHERE product_name = ?',[req.body.product_name]);
            if (Object.entries(sql).length === 0) {
                const insert = await pool.query('INSERT INTO product set ?',[req.body]);
                if (insert) {
                    res.json({status: true, message: 'Datos guardados correctamente.'});
                } else {
                    res.json({status: false, message: 'No se puedo almacenar los datos.'})
                }
            } else {
                res.status(404).json({message: 'El nombre del producto ya existe.'});
            }
        }
    }

    // UPDATE product
    public async update (req: Request, res: Response) {
        const { id } = req.params;
        const sql = await pool.query('SELECT * FROM product WHERE product_name = ? AND product_id != ?',[req.body.product_name,id]);
        if (Object.entries(sql).length === 0) {
            const update = await pool.query('UPDATE product SET ? WHERE product_id = ?',[req.body,id]);
            if(update) {
                res.json({status: true, message: 'Datos actualizados correctamente.'});
            }
        } else {
            res.status(404).json({message: 'El nombre del producto ya esta asociado a otro producto.'});
        }
    }

    //delete product
    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM product WHERE product_id = ?', [id]);
        res.json({status: true, message: 'Se ha eliminado correctamente.'});
    }

}

export const productController = new ProductController();