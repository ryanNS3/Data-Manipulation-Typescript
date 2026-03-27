import { estatistic } from "./estatistic/estatistic";
import { statusPagamento, vendasPorDia } from "./estatistic/grafico";
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
const valorTotal = document.getElementById("valor-total")
const valorQtdCredito = document.getElementById("valor-qtd-credito")
const valorQtdBoleto = document.getElementById("valor-qtd-boleto")

// mostrando as transaçoes na tabela

const estatistica = estatistic(dataAPINormalizeted? dataAPINormalizeted : null )

// Logica do consumo de API da página de estatística


if (dataAPINormalizeted && valorTotal instanceof HTMLElement){
    valorTotal.innerText = `${String(estatistica?.totalVendas)}`
}

if (dataAPINormalizeted && valorQtdBoleto instanceof HTMLElement && valorQtdCredito instanceof HTMLElement){
    valorQtdBoleto.innerText = `${estatistica?.transacaoBoleto}`
    valorQtdCredito.innerText = `${estatistica?.transacaoCredito}`
}

if (dataAPINormalizeted && linhasTabela instanceof HTMLElement){
    dataAPINormalizeted.map((item) =>{
       linhasTabela.innerHTML += `
        <tr>
            <td>${item.id}</td>
            <td>${item.email}</td>
            <td>${item.status}</td>
            <td>${item.cliente_novo == 1 ? "Sim" : "não"}</td>
            <td>${item.valor_r$}</td>
            <td>${item.data}</td>
        </tr>
       `
    })
}


// carregando os itens do grafico de status pagamento

if (estatistica){
    vendasPorDia("grafico-vendas-dia-semana", estatistica)
    statusPagamento("inner-grafico-status-pagamento",estatistica)
}