import {Request, Response} from 'express';
import pool from '../database';
import token from 'jsonwebtoken';

class AuthController {

    public async create (req: Request, res: Response) {
        const sql = await pool.query('SELECT * FROM user WHERE email = ?',[req.body.email]);
        if (Object.entries(sql).length === 0) {
            const insert = await pool.query('INSERT INTO user SET ?',[req.body]);
            if (insert) {
                res.json({status: true, message: 'Registro exitoso.'})
            } else {
                res.json({status: false, message: 'No se pudo registar'});
            }
        } else {
            res.status(404).json({message: 'El email ya existe hablar con el administrador.'});
        }
    }

    public async authentication (req: Request, res:Response){
        const JWT_SECRET = 'base64';
        const email = req.body.email;
        const password = req.body.password_user;
        const user = req.body;
        if (email == '' || password == '') {
            res.status(404).json({message: 'Todos los campos son obligarios.'});
        } else {
            const email_user = await pool.query('SELECT * FROM user WHERE email = ?',[email]);
            if (email_user.length > 0) {
                const passwword_user = await pool.query('SELECT * FROM user WHERE password_user = ?',[password])
                if (passwword_user.length > 0) {
                    const jwt = token.sign(user,JWT_SECRET);
                    res.status(200).send({
                        signed_user: email_user,
                        token: jwt
                    });
                } else {
                    res.status(404).json({message: 'Correo electronico ó contraseña incorrectos.'});
                }
            } else {
                res.status(404).json({message: 'Correo electronico ó contraseña incorrectos.'});
            }
        }
    }

}

export const authControler = new AuthController();