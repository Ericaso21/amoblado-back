import {Request, Response} from 'express';
import pool from '../database';


class LendingController {

    public async list (req: Request, res: Response){
        const lending = await pool.query('SELECT u.frist_name, u.surname, l.dues, l.fees_paid, l.status_lending, i.interest_rate, b.total FROM lending l INNER JOIN user u ON l.user_id = u.user_id INNER JOIN interest i ON l.interest_id INNER JOIN bill b ON l.bill_id = b.bill_id');
        res.json(lending);
    }

    public async getOne (req: Request, res: Response){
        const { id } = req.params;
        const landing = await pool.query('SELECT * FROM landing WHERE lending_id = ?',[id]);
        if (landing.length > 0) {
            return res.json(landing[0]);
        } else {
            res.status(404).json({message: 'Credito no encontrado'});
        }
    }

    public async create (req: Request, res:Response){
        if (req.body.bill_id == 0 || req.body.fees_paid == 0) {
            res.status(404).json({message: 'Todos los campos son obligarios.'});
        } else {
            const sql = await pool.query('SELECT * FROM lending WHERE user_id = ?',[req.body.user_id]);
            if (Object.entries(sql).length == 0) {
                const insert = await pool.query('INSERT INTO lending set ?',[req.body]);
                if (insert) {
                    res.json({status: true, message: 'Datos guardados correctamente.'})
                } else {
                res.json({status: false, message: 'Error a el registrar.'});
                }
            } else {
                res.status(404).json({message: 'El usuario ya cuenta con un credito.'});
            }
        }
    }

    public async update (req: Request, res: Response) {
        const { id } = req.body;
        const update = await pool.query('UPDATE lending SET ? WHERE lending_id = ?',[req.body,id]);
        res.json({status: true, message: 'Se ha pagado la cuota del mes.'})
    }

    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        const update = pool.query('UPDATE lending SET status_lending = 2 WHERE lending_id = ?',[id]);
        res.json({status: true, message: 'Se ha eliminado correctamente.'});
    }

}

export const lendingController = new LendingController();