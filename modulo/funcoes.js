/****************************************************************************************************************************
 * Objetivo: Arquivo de funções para gerenciar a API de estados e cidades.
 * Data: 15/09/2025
 * Atutor:Breno
 * Versão:1.0
 ****************************************************************************************************************************
 */


const MENSAGE_ERRO = [

    {
        status: false,
        status_code: 500,
        development: "Breno Oliveira Assis Reis"
    },
    {
        status: false,
        status_code: 404,
        development: "Breno Oliveira Assis Reis"
    },
    {
        status: false,
        status_code: 400,
        development: "Breno Oliveira Assis Reis"
    }

]
console.log(MENSAGE_ERRO[0])



// const MENSAGE_ERROR = {
//     status: false,
//     status_code: 500,
//     development: "Breno Oliveira Assis Reis"
// }
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
        return MENSAGE_ERRO[0]//Falsa status 500


}
//Retorna um estado pesquisando pela sigla.
const getAllEstadoBySigla = (sigla) => {
    if (!sigla)
        return MENSAGE_ERRO[1]
    let siglaEstado = sigla.toLocaleUpperCase()

    let indexEstado = dados.listaDeEstados.estados.findIndex(estados => estados.sigla === siglaEstado)

    let quantidade = dados.listaDeEstados.estados.length
    if (indexEstado < quantidade) {
        return MENSAGE_ERRO[2]
    }
    else {
        let estado = dados.listaDeEstados.estados[indexEstado]

        let mensage = {
            status: true, status_code: 200, development: "Breno Oliveira Assis Reis", uf: estado.sigla,
            descricao: estado.nome, capital: estado.capital, regiao: estado.regiao
        }
        return mensage
    }
}
console.log(getAllEstadoBySigla('sr'))

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