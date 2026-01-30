

export async function fetchTransaction <T>(url: string): Promise<T | null> {
    try{
        const req = await fetch(url)
        if(!req.ok) throw new Error("Ocorreu um erro")
        const data = await req.json()

        return data

    }

    catch(err){
        return null
    }
}