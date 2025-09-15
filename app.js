/****************************************************************************************************************************
 * Objetivo: EndPoints referente API de estados e cidades.
 * Data: 15/09/2025
 * Atutor:Breno
 * Versão:1.0
 * Observações:Instalação do Express, Cors,Body-Parser
 * npm install express      --save
 * npm cors express         --save
 *  npm install body-parser --save
 ****************************************************************************************************************************
 */

const express = require('express')//Responsável pela API
const cors = require('cors')//Responsável pela permissão de API(APP)
const bodyParser = require('body-parser')//Responsável por gerenciar a chegada dos dados da API com o front
const { request } = require('http')

//Retorna a porta do servidor atual ou colocamos local
const PORT = process.PORT || 8080
//Criando uma instância do objeto
const app = express()

//Configurações de permissões
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin','*')//Servidor de origem da API
    response.header('Access-Control-Allow-Methods','GET')//Verbos permitidos na API
    //Carregar as configurações no CORS da API
    app.use(cors())
    //Proximo, carregar os proximos endpoints
    next()
})

//ENDPOINTS
app.get('/v1/estados',(res,req)[
    
])

