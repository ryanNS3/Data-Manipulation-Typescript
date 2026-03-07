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
            acc.statusAguardando =+ 1
        }

        // Total de vendas por dia da semana
        const data = new Date(atual.data)
        const diaDaSemana = data.toLocaleDateString("pt-BR",{
            weekday: "long"
        })


        switch (diaDaSemana){
            case "domingo":
                acc.totalVendasPDia[0] += 1
                
                break
            case "segunda-feira":
                acc.totalVendasPDia[1] += 1
                
                break
            case "terça-feira":
                acc.totalVendasPDia[2] += 1
                
                break
            case "quarta-feira":
                acc.totalVendasPDia[3] += 1
                
                break
            case "quinta-feira":
                acc.totalVendasPDia[4] += 1
                
                break
            case "sexta-feira":
                acc.totalVendasPDia[5] += 1
                
                break
            case "sábado":
                acc.totalVendasPDia[6] += 1

                break
            
        }
        const maiorItemDosDiasDaSemana = Math.max(...acc.totalVendasPDia)
        const indiceMaiorItemDosDiasDaSemana = acc.totalVendasPDia.indexOf(maiorItemDosDiasDaSemana)

        switch (indiceMaiorItemDosDiasDaSemana){
            case 0:
                acc.diaComMaisVendas = "Domingo"
                break
            case 1:
                acc.diaComMaisVendas = "Segunda"
                break
            case 2:
                acc.diaComMaisVendas = "Terça"
                break
            case 3:
                acc.diaComMaisVendas = "Quarta"
                break
            case 4:
                acc.diaComMaisVendas = "Quinta"
                break
            case 5:
                acc.diaComMaisVendas = "Sexta"
                break
            case 6:
                acc.diaComMaisVendas = "Sábado"
                break
        }

        return acc
    },{
        somaTotalValores: 0,
        transacaoCredito:0,
        transacaoBoleto:0,
        statusPago:0,
        statusRecusadoOperadoraCartao:0,
        statusAguardando:0,
        totalVendasPDia: [0,0,0,0,0,0,0],
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
        totalVendasPDia: number[],
        diaComMaisVendas:string
}