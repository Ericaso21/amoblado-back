import {Request, Response} from 'express';
import pool from '../database';


class ReportController {

    public async list (req: Request, res: Response){
        const date = await pool.query('SELECT bill_date, FORMAT(total,3) as total FROM bill WHERE bill_date BETWEEN ? AND ?',[req.body.date_start,req.body.date_stop]);
        var suma = 0;
        for (let index = 0; index < date.length; index++) {
            var numero = parseFloat(date[index].total);
            suma += numero;
        }
        var sumas = suma.toFixed(3);
        res.json({status: true, data: date, total: sumas});
        
    }

}

export const reportController = new ReportController();