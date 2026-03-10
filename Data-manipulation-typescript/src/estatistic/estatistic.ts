import type { TransactionNormalized } from "../Type/transactionInterface";


// 3.1 - Soma total dos valores

// 3.2 - Transações por meio de pagamento.

// 3.3 - Transações por status.
    // status: "Paga" | "Recusada pela operadora de cartão" | "Paga"

// 3.4 - Total de vendas por dia da semana.

// 3.5 - Dia da semana com mais vendas.



export function estatistic(data: TransactionNormalized[] | null): EstatisticInterface | undefined{
    if (data)

    return data.reduce((acc, atual) =>{ 
        acc.totalVendas += 1

        if (typeof atual.valor_r$ == "number"){
            acc.somaTotalValores = acc.somaTotalValores + atual.valor_r$;
        }

        // Contagem por meio de pagamento
        if (atual.forma_de_pagamento == "Boleto"){
            acc.transacaoBoleto += 1
        }

        else if (atual.forma_de_pagamento == "Cartão de crédito"){
            acc.transacaoCredito += 1
        }

        // contagem por status
        if (atual.status == "Paga"){
            acc.statusPago += 1
        }
        else if (atual.status == "Recusada pela operadora de cartão"){
            acc.statusRecusadoOperadoraCartao += 1
        }

        else if (atual.status == "Aguardando pagamento"){
            acc.statusAguardando += 1
        }

        // Total de vendas por dia da semana
        const diaDaSemana = new Date(atual.data).getDay()
        console.log(diaDaSemana)


        acc.totalVendasPDia[diaDaSemana].vendas += 1
        

        return acc
    },{
        somaTotalValores: 0,
        transacaoCredito:0,
        transacaoBoleto:0,
        statusPago:0,
        statusRecusadoOperadoraCartao:0,
        statusAguardando:0,
        totalVendasPDia:[{ dia: "Domingo", vendas: 0 },
                        { dia: "Segunda", vendas: 0 },
                        { dia: "Terça", vendas: 0 },
                        { dia: "Quarta", vendas: 0 },
                        { dia: "Quinta", vendas: 0 },
                        { dia: "Sexta", vendas: 0 },
                        { dia: "Sábado", vendas: 0 }],
        totalVendas: 0,
        diaComMaisVendas:""
    })
}

export interface EstatisticInterface{
        somaTotalValores: number,
        transacaoCredito: number,
        transacaoBoleto:number,
        statusPago:number,
        statusRecusadoOperadoraCartao: number,
        statusAguardando: number,
        totalVendasPDia: {
            dia: string
            vendas: number
        }[],
        totalVendas: number,
        diaComMaisVendas:string
}