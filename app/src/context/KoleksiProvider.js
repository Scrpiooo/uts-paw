import { useEffect, useState } from "react";
import { KoleksiContext } from "./koleksiContext";
import useLocalStorage from "../hooks/useLocalStorage";

export default function KoleksiProvider({children}){
    const [items, setItems] = useLocalStorage('jurnal-latihan', null)
    const [loading, setLoading] = useState(items === null)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        if (items !== null) return

        async function muat(){
            try{
                const res = await fetch(`${import.meta.env.BASE_URL}data/koleksi.json`)
                if (!res.ok) throw new Error(`Gagal Memuat Data (status ${res.status})`)
                setItems(await res.json())
            }catch (err){
                setError(err.message)
            }finally{
                setLoading(false)
            }
        }
    muat()
    }, [items, setItems])

    const tambah = (item) => setItems((lama) => [...(lama ?? []), {...item, id:String(Date.now())} ])
    const hapus = (id) => setItems ((lama) => lama.filter((item) => item.id !== id))

    return(
        <KoleksiContext.Provider value={{items: items ?? [], loading, error, tambah, hapus}}>
            {children}
        </KoleksiContext.Provider>
    )


}