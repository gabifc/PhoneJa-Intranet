const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

db.serialize(() => {
/*
    // Criar
    db.run(`
        CREATE TABLE IF NOT EXISTS cliente (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            tel TEXT,
            cpf TEXT,
            end TEXT,
            num TEXT,
            estado TEXT,
            cidade TEXT,
            itens TEXT,
            valor TEXT,
            modelo TEXT,
            ano TEXT,
            cor TEXT,
            vendedor TEXT,
            loja TEXT
        );
    `)

    // Inserir dados 
    const query = `
        INSERT INTO cliente (
            nome,
            tel,
            cpf,
            end,
            num,
            estado,
            cidade,
            itens,
            valor,
            modelo,
            ano,
            cor,
            vendedor,
            loja
        ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?);
    `
    const values = [
        "Amora Fernandes",
        "11989898989",
        "12345678998",
        "Avenida do Atlantico",
        "123",
        "São Paulo",
        "Campinas",
        "celular",
        "2000",
        "Samsung A10",
        "2020",
        "Azul",
        "Juliana Pereira",
        "Campinas - Centro"
    ]

    function afterInsertData(err) {
        if(err) {
            return console.log(err)
        }
        console.log("Cadastrado com sucesso!")
        console.log(this)
    } */

     // db.run(query, values, afterInsertData)



    // Consultar dados
    
    db.all(`SELECT * FROM cliente`, function(err, rows){
        if(err) {
            return console.log(err)
        }
        console.log("Registro de Cliente:")
        console.log(rows)
    }) 

    // Deletar Dados
    /*
    db.run(`DELETE FROM cliente WHERE id = ?`, [1], function(err){
        if(err) {
            return console.log(err)
        }
        console.log("Registro deletado com sucesso!")
    })*/
    

})

