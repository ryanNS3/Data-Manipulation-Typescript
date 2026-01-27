

export async function fetchTransaction() {
    const req =  await fetch("https://api.origamid.dev/json/transacoes.json")
    console.log(req.json())
    return await req.json()
}