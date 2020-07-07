const express = require("express")
const server = express()

server.use(express.static("public"))
const nunjucks = require("nunjucks")

nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

server.get("/", (req, res) => {
    return res.render("home.html")
})
server.get("/cadastro", (req, res) => {
  return res.render("cadastro.html")
})
server.get("/login", (req, res) => {
  return res.render("index.html")
})
server.get("/dashboard", (req, res) => {
  return res.render("dashboard.html")
})

server.listen(3000)