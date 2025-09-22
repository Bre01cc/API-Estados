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
const dados = require('./modulo/funcoes.js')
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
    response.header('Access-Control-Allow-Origin', '*')//Servidor de origem da API
    response.header('Access-Control-Allow-Methods', 'GET')//Verbos permitidos na API
    //Carregar as configurações no CORS da API
    app.use(cors())
    //Proximo, carregar os proximos endpoints
    next()
})

//Request -> chegada de dados na API
//Response -> Retorno de dados na API

//ENDPOINTS
//Rota responsavel por listar a sigla de todos os estados do Brasil.
app.get('/v1/estados', function (request, response) {
    let estados = dados.getAllEstados()
    //Retorna o status code
    response.status(estados.status_code)
    //Retorna o JSON
    response.json(estados)
})

//Rota resposável por listar as informações do estado a partir da sua sigla.
app.get('/v1/estados/:uf',function (request, response) {
    let sigla = request.params.uf
    let infoEstado = dados.getAllEstadoBySigla(sigla)
    response.status(infoEstado.status_code)
    //Retorna o JSON
    response.json(infoEstado)
})

//Rota resposável por listar a capita do estado e suas demais informações a partir da sua sigla.
app.get('/v1/capital/:uf',function (request, response) {
    let sigla = request.params.uf
    let infoCapital = dados.getCapitalBySigla(sigla)
    response.status(infoCapital.status_code)
    //Retorna o JSON
    response.json(infoCapital)
})

//Rota responsável por listar todos os estados de uma região.
app.get('/v1/regiao/:uf',function (request, response) {
    let regiao = request.params.uf
    let infoRegiao = dados.getEstadosByRegiao(regiao)
    response.status(infoRegiao.status_code)
    //Retorna o JSON
    response.json(infoRegiao)
})

//Rota responsável por listar a capital atual e atiga do Brasil.
app.get('/v1/pais/capitais/',function (request, response) {
    let infoPaisCapital = dados.getVerifyCapitaisDoPais()
    response.status(infoPaisCapital.status_code)
    //Retorna o JSON
    response.json(infoPaisCapital)
})

//Rota responsável por listar as cidades de um determinado estado a partir da sua sigla.
app.get('/v1/cidades/:uf',function (request, response) {
    let sigla = request.params.uf
    let infoCidades = dados.getCidadesBySigla(sigla)
    response.status(infoCidades.status_code)
    //Retorna o JSON
    response.json(infoCidades)
})

//Start na API
app.listen(PORT, function () {
    console.log('API aguardando requisições.....')
})


