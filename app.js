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
app.get('/v1/estados', function (request, response) {
    let estados = dados.getAllEstados()
    //Retorna o status code
    response.status(estados.status_code)
    //Retorna o JSON
    response.json(estados)
}
)
app.get('/v1/estados/:uf',function (request, response) {
    let sigla = request.params.uf
    let infoEstado = dados.getAllEstadoBySigla(sigla)
    response.status(infoEstado.status_code)
    //Retorna o JSON
    response.json(infoEstado)
})
app.get('/v1/capital/:uf',function (request, response) {
    let sigla = request.params.uf
    let infoCapital = dados.getCapitalBySigla(sigla)
    response.status(infoCapital.status_code)
    //Retorna o JSON
    response.json(infoCapital)
})
app.get('/v1/regiao/:uf',function (request, response) {
    let regiao = request.params.uf
    let infoRegiao = dados.getEstadosByRegiao(regiao)
    response.status(infoRegiao.status_code)
    //Retorna o JSON
    response.json(infoRegiao)
})
app.get('/v1/pais/capitais/',function (request, response) {
    let infoPaisCapital = dados.getVerifyCapitaisDoPais()
    response.status(infoPaisCapital.status_code)
    //Retorna o JSON
    response.json(infoPaisCapital)
})

//Start na API
app.listen(PORT, function () {
    console.log('API aguardando requisições.....')
})

