import { Link } from "react-router-dom"
import useKoleksi from "../hooks/useKoleksi.js"
import mahasiswa from "../../mahasiswa.json"

export default function Beranda(){
  const { items, loading } = useKoleksi()
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size

  return (
    <section className="text-center">
      <h1 className="font-bold text-[30px] mt-8">DAFTAR LATIHAN</h1>
      <p className="mt-4">Tema: {mahasiswa.tema}</p>
      {loading ? (
        <p>Memuat ringkasan...</p>
      ) : (
        <p>
          Ada {items.length} tugas dalam {jumlahKategori} kategori.
        </p>
      )}
      <div className="mt-18">
        <Link to="/koleksi" className="border border-[#082052] px-3 py-2 rounded-lg hover:text-blue-700">Lihat semua riwayat</Link>
      </div>
    </section>
  )
}