

export async function fetchTransaction <T>(url: string): Promise<T | null> {
    try{
        const req =  await fetch(url)
        if(!req.ok) throw new Error("Ocorreu um erro")
        console.log(req.json())
        return await req.json()

    }

    catch(err){
        return null
    }
}