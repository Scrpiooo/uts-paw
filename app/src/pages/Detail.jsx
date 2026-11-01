import { Link, useNavigate, useParams } from "react-router-dom";
import useKoleksi from "../hooks/useKoleksi";

export default function Detail(){
  const { id } = useParams()
  const navigate = useNavigate()
  const { items, loading, hapus } = useKoleksi()
  const item = items.find((i) => String(i.id) === id)

  if(loading) return <p>Memuat Data...</p>
  if(!item){
    return(
      <section>
        <h1 className="font-bold text-[#082052]">Item tidak ditemukan.</h1>
        <Link to="/koleksi">Kembali ke koleksi</Link>
      </section>
    )
  }

  const konfirmasiHapus = () => {
    if(window.confirm(`Hapus "${item.judul}" ?`)){
      hapus(item.id)
      navigate("/koleksi")
    }
  }

  return(
    <section className="space-y-6 mt-10 w-full mx-auto max-w-[450px] text-center border border-[#082052] rounded-xl px-2 py-4 bg-white shadow-sm">
      <h1 className="text-[24px] font-bold text-[#082052]">{item.judul}</h1>
      <dl className="space-y-3">
        <dt className="text-[#082052] font-semibold">Kategori:</dt>
        <dd>{item.kategori}</dd>
        <dt className="text-[#082052] font-semibold">Tanggal:</dt>
        <dd>{item.tanggal}</dd>
        <dt className="text-[#082052] font-semibold">Durasi:</dt>
        <dd>{item.durasi} Menit</dd>
        <dt className="text-[#082052] font-semibold">Kalori Terbakar:</dt>
        <dd>{item.kalori} kkal</dd>
      </dl>

      <div className="flex items-center justify-between px-2">
        <button type="button" onClick={konfirmasiHapus} className="text-red-900 font-semibold hover:text-red-500">
          Hapus Latihan
        </button>
        <Link to="/koleksi" className="text-[#082052] font-semibold hover:text-blue-700">Kembali</Link>
      </div>
    </section>
  )
}