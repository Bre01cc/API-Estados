/****************************************************************************************************************************
 * Objetivo: Arquivo de funções para gerenciar a API de estados e cidades.
 * Data: 15/09/2025
 * Atutor:Breno
 * Versão:1.0
 ****************************************************************************************************************************
 */


const MENSAGE_ERRO = {
    status: false,
    status_code: 500,
    development: "Breno Oliveira Assis Reis"
}
//Por boas práticas colocamos no arquivo ".js"
const dados = require('./estado_cidades.js')

//Retorna todos os estados
const getAllEstados = () => {

    //(item) é o nome de referencia do retorno do forEach
    let mensage = {
        status: true, status_code: 200, development: "Breno Oliveira Assis Reis", uf: [

        ]
    }
    dados.listaDeEstados.estados.forEach((item) => {
        mensage.uf.push(item.sigla)
    })
    mensage.quantidade = mensage.uf.length

    if (mensage.uf.length > 0)
        return mensage //Verdadeira status 200
    else
        return MENSAGE_ERRO //Falsa status 500


}
//Retorna um estado pesquisando pela sigla.
const getAllEstadoBySigla = (sigla) => {

}
//Retorna a capital referente a um estado pela sua determinada sigla.
const getCapitalBySigla = (sigla) => {

}

//Retorna uma lista de estados pesquisando pela região.
const getEstadosByRegiao = (regiao) => {

}
//Retorna uma lista de estados referente as capitais do país.
const getVerifyCapitaisDoPais = () => {

}
//Retorna uma lista de cidades pesquisando pela sigla do estado.
const getCidadesBySigla = (sigla) => {

}
// if(item.regiao=='Norte'){
//     console.log(item.sigla,item.regiao)
// }

module.exports = {
    getAllEstados
}

