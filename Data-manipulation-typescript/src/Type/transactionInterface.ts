
export function isTransaction(data:unknown): data is Transaction[]{
    if (data && Array.isArray(data) && typeof data[0] === "object"){
        const isIncludeKeys = "Cliente Novo" in data[0] && "Data" in data[0] && "Email" in data[0] &&  "Forma de Pagamento" in data[0]
        if (isIncludeKeys){
            return true
        }
        else{
            return false
        }
    }
    else{
        return false
    }
}
export interface Transaction{
    ["Cliente Novo"]: 0 | 1
    Data: string
    Email: string
    ["Forma de Pagamento"]: "Boleto" | "Cartão de crédito"
    ID: number
    Nome: string
    Status: "Paga" | "Recusada pela operadora de cartão" 
    ["Valor (R$)"]: string

}

export interface TransactionNormalized{
    cliente_novo: 0 | 1
    data: string
    email: string
    forma_de_pagamento: "Boleto" | "Cartão de crédito"
    id: number
    nome: string
    status: "Paga" | "Recusada pela operadora de cartão" | "Paga"
    valor_r$: number | "-"
}