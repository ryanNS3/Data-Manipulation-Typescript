

export function normalizeJson<T extends Record<string, any>>(data: T[]): Record<string, T[keyof T]>[] | null {

    if (data){
        return(
            data.map((obj) =>{
                const newObject: Record<string, T[keyof T]> = {}
                Object.entries(obj).forEach(([key, value]) =>{
                    const normalizeKey = key.toLowerCase().replace(/\s+/g, "_").replace(/[()]/g, "");
                    newObject[normalizeKey] = value
                })
                return newObject
            })
           )
    }

    else{
        return null
    }
 
}