import { useState } from "react"
import useKoleksi from "../hooks/useKoleksi.js"
import KotakPencarian from "../components/KotakPencarian.jsx"
import KartuItem from "../components/KartuItem.jsx"

export default function Koleksi() {
  const { items, loading, error } = useKoleksi()
  const [cari, setCari] = useState('')
  const [kategori, setKategori] = useState("Semua")

  if (loading) return <p>Memuat data...</p>
  if (error) return <p role="alert">Gagal memuat: {error}</p>

  const daftarKategori = ["Semua", ...new Set(items.map((item) => item.kategori))]
  const tampil = items.filter((item) => item.judul.toLowerCase().includes(cari.toLowerCase()) &&
  (kategori === "Semua" || item.kategori === kategori),
  )

  return (
    <section className="space-y-5">
      <h1 className="font-bold text-[#082052] text-[30px]">Koleksi Latihan Olahraga</h1>
      <div className="flex flex-wrap gap-3">
        <KotakPencarian nilai={cari} onUbah={setCari} />

        <select aria-label="Kategori" value={kategori} onChange={(e) => setKategori(e.target.value)} className="px-4 py-2 rounded-lg border border-[#D8CBB8] focus:border-[#082052] bg-white">
          {daftarKategori.map((k) => (<option key={k}>{k}</option>))} 
        </select>
      </div>
      {tampil.length === 0 ? (<p>Tidak ada item yang cocok.</p>) : (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tampil.map((item) => (
          <KartuItem key={item.id} item={item} />
        ))}
      </div>
      )}
    </section>
  )
}