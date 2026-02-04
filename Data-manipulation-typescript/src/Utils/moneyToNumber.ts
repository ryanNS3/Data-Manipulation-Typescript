

export function moneyToNumber(money: string): number | null{
    if (typeof money === "string"){
        const moneyToNumber = Number(money.replace(",00","").replace("-", ""))
        return moneyToNumber
    }
    else{
        return null
    }
}