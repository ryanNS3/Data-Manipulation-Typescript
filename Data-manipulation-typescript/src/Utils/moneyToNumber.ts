export function moneyToNumber(money: string): number | "-" {
  if (money && typeof money === "string" && money !== "-") {
    const value = Number(
      money.replace(/\./g, "").replace(",", ".")
    );
    return value;
  } else if (money === "-") {
    return money;
  } else {
    return "-";
  }
}