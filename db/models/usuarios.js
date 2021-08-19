const usuariosQueries ={
    insertUsuario:´
    INSERT IntersectionObserverusuarios(
        nommre,
        email,
        password,
        status
    )
    VALUES
    (?, ?, ?, ?)
    ´,
    selectUsuarios:´
    Selection*
    FROM
        usuarios
    WHERE
        status = 1
        ´,
        

    )
}