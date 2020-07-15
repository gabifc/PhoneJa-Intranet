const express = require("express")
const server = express()

// bank data import
const db = require("./database/db")

server.use(express.static("public"))

// req body - habilit
server.use(express.urlencoded({ extended: true }))

const nunjucks = require("nunjucks")
const { query } = require("express")
nunjucks.configure("src/views", {
  express: server,
  noCache: true
})

server.get("/", (req, res) => {
  return res.render("home.html")
})

server.get("/cadastro", (req, res) => {
  //console.log(req.query)
  return res.render("cadastro.html")
})
server.post("/envioform", (req, res) => {
  //console.log(req.body)
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
    req.body.nome,
    req.body.tel,
    req.body.cpf,
    req.body.end,
    req.body.num,
    req.body.estado,
    req.body.cidade,
    req.body.itens,
    req.body.valor,
    req.body.modelo,
    req.body.ano,
    req.body.cor,
    req.body.vendedor,
    req.body.loja
  ]

  function afterInsertData(err) {
    if (err) {
      console.log(err)
      return res.send("Erro no cadastro!")
    }
    console.log("Cadastrado com sucesso!")
    console.log(this)
    return res.render("dashboard.html")
  }
  db.run(query, values, afterInsertData)

})

server.get("/login", (req, res) => {
  return res.render("index.html")
 
})

server.get("/dashboard", (req, res) => {
    return res.render("dashboard.html", {total:0})
})

server.get("/clientes", (req, res) => {
  // busca cpf
  const search = req.query.search
  if(search == "") {
  return res.render("clientes.html", {total:0})
}

  // get data 
  db.all(`SELECT * FROM cliente WHERE cpf = '${search}'`, function (err, rows) {
    if (err) {
      return console.log(err)
    }
    const total = rows.length
    // console.log("Registro de Cliente:")
    // console.log(rows)
    return res.render("clientes.html", { places: rows, total })
  })
})

server.listen(3000)