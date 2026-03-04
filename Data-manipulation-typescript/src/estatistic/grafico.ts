import type { EstatisticInterface } from "./estatistic";


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
    const maiorParaMenor = [0,0,0]


    const style = "display:flex;"

    if (grafico instanceof HTMLElement){
        grafico.innerHTML= `
            <div class="item-status-pagamento">
                <p class="h5">Pago</p>
                <div style={} class="barra-status-pagamento">1340</div>
            </div>
        
        `
    }
}