import { useContext } from "react";
import { koleksiContext } from "../context/koleksiContext.js";

export default function useKoleksi(){
    const konteks = useContext(koleksiContext)

    if(!konteks){
        throw new Error(`useKoleksi harus dipakai di dalam <KoleksiProvider>`)
    }
    return konteks
}