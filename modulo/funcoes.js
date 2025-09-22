/****************************************************************************************************************************
 * Objetivo: Arquivo de funções para gerenciar a API de estados e cidades.
 * Data: 15/09/2025
 * Atutor:Breno
 * Versão:1.0
 ****************************************************************************************************************************
 */


//Criando um array de mensagens
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
const dados = require('./estado_cidades.js')

//Retorna todos os estados
const getAllEstados = () => {

    //Variavel de base para o cabeçalho
    let mensage = {
        status: true, status_code: 200, development: "Breno Oliveira Assis Reis", uf: [

        ]
    }
    //(item) é o nome de referencia do retorno do forEach
    //Loop, forEach apenas para array, percorre todos os index do array e devolve o que estiver lá dentro
    dados.listaDeEstados.estados.forEach((item) => {
        mensage.uf.push(item.sigla)
    })
    //Para adicionar um elemento novo no JSON
    mensage.quantidade = mensage.uf.length
    //delete mensage(para remover um atributo de um JSON)
    if (mensage.uf.length > 0)
        //Quem chamar essa função tera como retorno a variável mensage.
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

    if (indexEstado == -1)
        return MENSAGE_ERRO[2]
    else {
        let estado = dados.listaDeEstados.estados[indexEstado]

        let mensage = {
            status: true, status_code: 200, development: "Breno Oliveira Assis Reis", uf: estado.sigla,
            descricao: estado.nome, capital: estado.capital, regiao: estado.regiao
        }

        //Quem chamar essa função tera como retorno a variável mensage.
        return mensage
    }
}

//Retorna a capital referente a um estado pela sua determinada sigla.
const getCapitalBySigla = (sigla) => {
    if (!sigla)
        return MENSAGE_ERRO[2]
    let siglaEstado = sigla.toLocaleUpperCase()

    let indexEstado = dados.listaDeEstados.estados.findIndex(estados => estados.sigla === siglaEstado)

    if (indexEstado == -1)
        return MENSAGE_ERRO[1]
    else {
        let estado = dados.listaDeEstados.estados[indexEstado]

        let mensage = {
            status: true, status_code: 200, development: "Breno Oliveira Assis Reis", uf: estado.sigla,
            descricao: estado.nome, capital: estado.capital
        }

        //Quem chamar essa função tera como retorno a variável mensage.
        return mensage
    }

}
//Retorna uma lista de estados pesquisando pela região.
const getEstadosByRegiao = (regiao) => {
    if (!regiao)
        return MENSAGE_ERRO[2]
    let mensage = {
        status: true, status_code: 200, development: "Breno Oliveira Assis Reis", regiao: regiao,
        estados: []
    }

    if (regiao == 'Norte' || regiao == 'Nordeste' || regiao == 'Centro-Oeste') {
        dados.listaDeEstados.estados.forEach((item) => {
            //Apenas os estados que tiverem a regiao igual ao recebido no parametro da função
            //Serão adicionados no atributo estados da mensage
         
                //Adicionando objetos no array de estados
                //E a cada item.(atributo) ele será adicionado junto a uf:''
                //ou descricao:''
                mensage.estados.push({
                    uf: item.sigla,
                    descricao: item.nome
                })
            })
    }
        return mensage
    }
    //Quem chamar essa função tera como retorno a variável mensage.



//Retorna uma lista de estados referente as capitais do país.
const getVerifyCapitaisDoPais = () => {
    let mensage = {
        status: true, status_code: 200, development: "Breno Oliveira Assis Reis", capitais: [

        ]
    }
    //(item) é o nome de referencia do retorno do forEach
    //Loop, forEach apenas para array, percorre todos os index do array e devolve o que estiver lá dentro
    dados.listaDeEstados.estados.forEach((item) => {
        if (item.capital_pais) {
            mensage.capitais.push({
                capital_pais: item.capital_pais.capital,
                uf: item.sigla,
                regiao: item.regiao,
                capital_pais_ano_inicio: item.capital_pais.ano_inicio,
                capital_pais_ano_termino: item.capital_pais.ano_fim
            })
        }
    })
    return mensage
}
//Para adicionar um elemento novo no JSON  

const getCidadesBySigla = (sigla) => {
    if (!sigla)
        return MENSAGE_ERRO[1]
    let siglaEstado = sigla.toLocaleUpperCase()

    let indexEstado = dados.listaDeEstados.estados.findIndex(estados => estados.sigla === siglaEstado)

    if (indexEstado == -1)
        return MENSAGE_ERRO[2]
    else {
        let estado = dados.listaDeEstados.estados[indexEstado]
        let cidade = estado.cidades

        let mensage = {
            status: true, status_code: 200, development: "Breno Oliveira Assis Reis", uf: estado.sigla,
            descricao: estado.nome, quantidade: cidade.length, cidades: []
        }
        cidade.forEach((item) => {

            mensage.cidades.push(item.nome)
        })
        //Quem chamar essa função tera como retorno a variável mensage.
        return mensage
    }
}
//Exportando as funções, se não for exportada não ficara visivel para os demais arquivos do projeto.
module.exports = {
    getAllEstados,
    getAllEstadoBySigla,
    getCidadesBySigla,
    getVerifyCapitaisDoPais,
    getCapitalBySigla,
    getEstadosByRegiao
}