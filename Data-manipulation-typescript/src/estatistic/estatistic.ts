import type { TransactionNormalized } from "../Type/transactionInterface";


// 3.1 - Soma total dos valores

// 3.2 - Transações por meio de pagamento.

// 3.3 - Transações por status.
    // status: "Paga" | "Recusada pela operadora de cartão" | "Paga"

// 3.4 - Total de vendas por dia da semana.

// 3.5 - Dia da semana com mais vendas.



export function estatistic(data: TransactionNormalized[]){
    data.reduce((acc, atual) =>{
        return acc
    },{
        somaTotalValores: 0,
        transacaoDebito:0,
        transacaoCredito:0,
        statusPago:0,
        statusRecusadoOperadoraCartoa:0,
        totalVendasPDia: [],
        diaComMaisVendas:""
        
    })
}