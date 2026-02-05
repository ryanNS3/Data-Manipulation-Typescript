

export function moneyToNumber(money: string): number | null | "-"{
    if (money && typeof money === "string" && money != "-"){
        const moneyToNumber = Number(money.replace(",","."))
        return moneyToNumber
    }
    else if(money == "-"){
        return money
    }

    else{
        return null
    }


    
}