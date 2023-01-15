
require('dotenv').config({path:'../variables.env'})

const http = require('http');
const { path } = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { json } = require('body-parser');

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res, next) => {
    let erro = 'Erro ao acessar a pagina';
    try{
        res.sendFile(__dirname + "/Views/index.html");
    }catch(error){
        res.status(501).send(erro)
    }
})

app.listen(3000, () => {
    try{
        console.log('Conectado ao servidor http://localhost:3000')
    }catch(error){
        console.log(`Erro ao conectar: ${error}`);
    }
    
})