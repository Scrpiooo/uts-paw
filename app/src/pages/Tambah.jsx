import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useKoleksi from "../hooks/useKoleksi.js"
import "./Tambah.css"

const AWAL = {judul: "", kategori: "Olahraga Air", tanggal: "", durasi: "", kalori: ""}

export default function Tambah(){
  const {tambah} = useKoleksi()
  const navigate = useNavigate()
  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState("")

  const ubah = (e) => setForm({...form, [e.target.name]: e.target.value})

  const simpan = (e) => {
    e.preventDefault()
    if(form.judul.trim().length < 3){
      setGalat("Judul wajib diisi, minimal 3 karakter.")
      return
    }
    
    tambah({...form, judul: form.judul.trim(), durasi: Number(form.durasi), kalori: Number(form.kalori),})
    navigate("/koleksi")
  }

  return(
    <form className="formulir mx-auto flex w-full max-w-xl flex-col gap-4 rounded-xl border border-[#D8CBB8] bg-white p-6 shadow-sm" 
    onSubmit={simpan} noValidate>
      <h1 className="font-bold text-[#082052] text-[24px]">Tambah Tugas</h1>

      <div className="flex flex-col gap-2">
        <label htmlFor="judul" className="font-semibold text-[#082052]">Judul</label>
        <input id="judul" name="judul" value={form.judul} onChange={ubah} className="rounded-lg border border-[#082052] px-4 py-1"/>
      </div>
      {galat && <p role="alert" className="text-sm text-red-600">{galat}</p>}
      
      <div className="flex flex-col gap-2">
        <label htmlFor="kategori" className="font-semibold text-[#082052]">Kategori</label>
        <select id="kategori" name="kategori" value={form.kategori} onChange={ubah} className="rounded-lg border border-[#082052] px-4 py-1">
          <option>Olahraga Air</option>
          <option>Olahraga Permainan</option>
          <option>Olahraga Kardio</option>
          <option>Olahraga Otak</option>
          <option>Senam & Kebugaran</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="tanggal" className="font-semibold text-[#082052]">Tanggal</label>
        <input id="tanggal" name="tanggal" type="date" value={form.tanggal} onChange={ubah} className="rounded-lg border border-[#082052] px-4 py-1"/>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="durasi" className="font-semibold text-[#082052]">Durasi (Menit)</label>
        <input id="durasi" name="durasi" type="number" value={form.durasi} onChange={ubah} className="rounded-lg border border-[#082052] px-4 py-1"/>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="kalori" className="font-semibold text-[#082052]">Kalori Terbakar (kkal)</label>
        <input id="kalori" name="kalori" type="number" value={form.kalori} onChange={ubah} className="rounded-lg border border-[#082052] px-4 py-1"/>
      </div>

      <button type="submit" className="rounded-lg border px-3 py-2 font-semibold text-[#082052] hover:text-blue-700">Simpan</button>

      <div className="mt-6 max-w-[480px]">
        <p className="font-semibold text-[#082052]">Isi state saat ini: </p>
        {JSON.stringify(form)}
      </div>
    
    </form>
  )
}