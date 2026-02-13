import { estatistic } from "./estatistic/estatistic";
import { fetchTransaction } from "./Service/api";
import type { Transaction } from "./Type/transactionInterface";
import { normalizeJson } from "./Utils/normalizar";

// 1 - Acesse os dados da api: https://api.origamid.dev/json/transacoes.json

// 2 - Mostre em uma tabela os dados de cada transação. - check

// 3 - Calcule:

// 3.1 - Soma total dos valores

// 3.2 - Transações por meio de pagamento.

// 3.3 - Transações por status.

// 3.4 - Total de vendas por dia da semana.

// 3.5 - Dia da semana com mais vendas.

// 4 - Mostre as estatísticas na tela.

// 5 - Organize o código em pequenos módulos.

// 6 - Normalize os dados da API se achar necessário.



const dataAPI = await fetchTransaction<Transaction[]>("https://api.origamid.dev/json/transacoes.json")
const dataAPINormalizeted = normalizeJson(dataAPI)
const linhasTabela = document.getElementById("itensTabela")


console.log(dataAPINormalizeted)
// mostrando as transaçoes na tabela
console.log(estatistic(dataAPINormalizeted))
if (dataAPINormalizeted && linhasTabela instanceof HTMLElement){
    dataAPINormalizeted.map((item) =>{
       linhasTabela.innerHTML += `
        <tr>
            <td>${item.id}</td>
            <td>${item.nome}</td>
            <td>${item.email}</td>
            <td>${item.cliente_novo}</td>
            <td>${item.data}</td>
            <td>${item.status}</td>
            <td>${item.valor_r$}</td>
            <td>${item.forma_de_pagamento}</td>
        </tr>
       `
    })
}