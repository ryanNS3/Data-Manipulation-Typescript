
export interface Transaction{
    cliente_novo: 0 | 1
    data: string
    email: string
    forma_de_pagamento: "Boleto" | "Cartão de crédito"
    id: number
    nome: string
    status: "Paga" | "Recusada pela operadora de cartão" | "Paga"
    valor_R$: string

}