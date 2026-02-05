import { isTransaction, type Transaction, type TransactionNormalized } from "../Type/transactionInterface";
import { moneyToNumber } from "./moneyToNumber";




export function normalizeJson(json: any): TransactionNormalized[] | null {

    if (json && isTransaction(json)){
        return json.map((item) =>{
            const newObject: TransactionNormalized = {
            cliente_novo: item["Cliente Novo"],
            data: item.Data,
            email: item.Email,
            forma_de_pagamento: item["Forma de Pagamento"],
            id: item.ID,
            nome: item.Nome,
            status: item.Status,
            valor_r$: moneyToNumber( item["Valor (R$)"])
            }

            return newObject

        })
    }
    else{
        return null
    }
}
