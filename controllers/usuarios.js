const {request, response} = require("express");
const pool = require("../db/conexion");
const usuariosQueries = require("../db/models/usuarios");
const bcryptjs = require("bcryptjs");

const usuariosGet = async(req = request, res = response) =>{
   let conn;


   try {
    conn = await pool.getConnection();

    const usuarios = await conn.query(usuariosQueries.selectUsuarios);

    res.json({usuarios});
} catch (error) {
        console.log(error);
        res
        .status(500)
        .json({msg: "Por favor consulte  al admor.", error});
} finally {
        if (conn) conn.end();
    }
};
const usuariosPost = async(req = request, res = response) =>{
    const {nombre, email, password, status=1 } = req.body;
    let conn;


    try {
        const salt = bcryptjs.genSaltSync();
        const passwordHash = bcryptjs.hashSync(password, salt);

     conn = await pool.getConnection();
 
     const usuarios = await conn.query(usuariosQueries.insertUsuario,[
         nombre, 
         email, 
         passwordHash, 
         status]);
 

         res.json({usuarios});
 } catch (error) {
         console.log(error);
         res
         .status(500)
         .json({msg: "Por favor consulte  al admor.", error});
 } finally {
         if (conn) conn.end();
     }
}


const usuariosPut = async (req = request, res = response) =>{
    const { email } = req.query;
    const { nombre, status } = req.body;
    let conn;


    try {
     conn = await pool.getConnection();
 
     const usuarios = await conn.query(usuariosQueries.updateUsuario, [
         nombre, 
         status,
         email,
        ]);
 
     res.json({usuarios});
 } catch (error) {
         console.log(error);
         res
         .status(500)
         .json({msg: "Por favor consulte  al admin.", error});
 } finally {
         if (conn) conn.end();
     }
}
const usuariosDelete = async(req = request, res = response) =>{
    const {email} = req.query;
    let conn;

    try {
     conn = await pool.getConnection();
 
     const usuarios = await conn.query(usuariosQueries.deleteUsuario, [email]);
 
     res.json({usuarios});
 } catch (error) {
         console.log(error);
         res
         .status(500)
         .json({msg: "Por favor consulte  al admin.", error});
 } finally {
         if (conn) conn.end();
     }

}

module.exports = {usuariosGet,usuariosPost, usuariosPut, usuariosDelete};