import type { EstatisticInterface } from "./estatistic";


export function vendasPorDia(id_grafico: string, estatistica: EstatisticInterface){
    const graficoHtml = document.getElementById(id_grafico)
    const estatisticComPorcentagemDiaSemana = estatistica.totalVendasPDia.map((dia) =>{
        return {
        nome: dia.dia,
        valor: dia.vendas,
        porcentagem: dia.vendas / estatistica.totalVendas * 100
        }
    })
    if (graficoHtml instanceof HTMLElement){
        estatisticComPorcentagemDiaSemana.map((item) =>{
        console.log("dia com mais venda" + estatistica.diaComMaisVendas)
        const eMaiorValorDeVendas = estatistica.diaComMaisVendas.dia == item.nome ? true : false
        graficoHtml.innerHTML += `
        <div>
            <p>${Math.ceil(item.porcentagem)}%</p>
          <div style=height:${item.porcentagem * 2}% class="bar-grafico-vendas-dia-semana ${eMaiorValorDeVendas ? "dia-com-maior-venda" : ""}"></div>
          <p class="h6" style=${eMaiorValorDeVendas ? "color:black" : ""}>${item.nome}</p>
        </div>

        `
    })
    }
    
    
    



}

export function statusPagamento(id_grafico: string, estatistica: EstatisticInterface){
    const grafico = document.getElementById(id_grafico)

    // recriando as variaveis para tornar o código mais legivel
    const pago = estatistica.statusPago
    const recusado = estatistica.statusRecusadoOperadoraCartao
    const aguardando = estatistica.statusAguardando

    // calculando o total de  transações 
    const totalTransancoes = pago + recusado + aguardando

    // medidindo a % de representação em relção ao total de transações para colocar no width do css

    // a partir dessa lista eu vou ordernar do maior para o menor 
    const listaStatus = [
        {nome:"Pago",
        valor: pago,
        porcentagem: pago/totalTransancoes * 100
        },

        {nome:"Recusado",
        valor: recusado,
        porcentagem: recusado/totalTransancoes * 100
        },

         {nome:"Aguardando",
            valor: aguardando,
            porcentagem: aguardando/totalTransancoes * 100
        },
    ]
// faco a comparcao do item A para o Item B 
    const maiorParaMenor = listaStatus.sort((a,b)=> b.valor - a.valor)
    if (grafico instanceof HTMLElement){
        maiorParaMenor.map((item,index) =>{
             grafico.innerHTML+= `
            <div  class="item-status-pagamento">
                <p class="h5">${item.nome}</p>
                <div style=width:${item.porcentagem}% class="barra-status-pagamento ${index == 0 ? "maior-item-status-pagamento": ""}">
                    <p class="h6">${item.valor}</p>
                </div>
            </div>
        
        `
        })
       
    }
}