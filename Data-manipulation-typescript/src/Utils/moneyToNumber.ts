

export function moneyToNumber(money: string): number | "-"{
    if (money && typeof money === "string" && money != "-"){
        const moneyToNumber = Number(money.replace(",","."))
        return moneyToNumber
    }
    else if(money == "-"){
        return money
    }

    else{
        return "-"
    }


    
}