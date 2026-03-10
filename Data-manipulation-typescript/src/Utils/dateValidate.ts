

export function dateValidate(date: string) : string{
    const cleanDate = date.trim()
    const [dia,mes,resto] = cleanDate.split("/")
    const [ano, hora] = resto.split(" ")


    return `${ano}-${mes}-${dia}T${hora}`
}