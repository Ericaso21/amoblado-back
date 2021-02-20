import {Request, Response} from 'express';
import pool from '../database';


class CategoryController {
    //list categorias
    public async list(req: Request, res: Response){
        const category = await pool.query('SELECT category_id, category_name, DATE_FORMAT(created_at, "%d/%m/%Y") as created_at FROM category');
        res.json(category);
    }

    //create categoria
    public async create(req: Request, res: Response){
        if (req.body.category_name == '') {
            res.status(404).json({message: 'Todos los campos son obligarios'});
        } else {
            const sql = await pool.query('SELECT * FROM category WHERE category_name = ?',[req.body.category_name]);
            if (Object.entries(sql).length === 0) {
                const insert = await pool.query('INSERT INTO category SET ?',[req.body]);
                if (insert) {
                    res.json({status: true, message: 'Datos guardados correctamente.'});
                } else {
                    res.json({status: false, message: 'No se puedo almacenar los datos.'});
                }
            } else {
                res.status(404).json({message: 'La categoria ya existe.'});
            }
        }
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        const sql = await pool.query('SELECT * FROM category WHERE category_name = ? AND category_id != ?',[req.body.category_name,id]);
        if (Object.entries(sql).length === 0) {
            const update = await pool.query('UPDATE category SET ? WHERE category_id = ?',[req.body,id]);
            if (update) {
                res.json({status: true, message: 'Datos actualizados correctamente.'});
            }
        } else {
            res.status(404).json({message: 'El nombre de la categooria ya esta asociado a otra categoria.'});
        }
    }

    public async delete(req: Request, res: Response){
        const { id } = req.params;
        await pool.query('DELETE FROM category WHERE category_id = ?',[id]);
        res.json({status: true, message: 'SE ha eliminado correctamente'});
    }


}

export const categoryController = new CategoryController();