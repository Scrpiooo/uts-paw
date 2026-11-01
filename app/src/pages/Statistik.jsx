import useKolesi from "../hooks/useKoleksi.js"

export default function Statistik(){
  const {items} = useKolesi()
  const perKategori = items.reduce((hitung, {kategori}) => ({...hitung, [kategori]: (hitung[kategori] ?? 0) + 1}), {})
  
  return(
  <section className="space-y-6">
    <h1 className="text-3xl font-bold text-[#082052]">Statistik</h1>
    <div className="w-full max-w-[480px] overflow-x-auto rounded-lg border bg-white">
    <table className="w-full text-left">
      <thead>
        <tr className="bg-[#082052] text-[#F8F0E5]">
          <th className="px-4 py-3">Kategori</th>
          <th className="px-4 py-3 text-right">Jumlah</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(perKategori).map(([kategori, jumlah]) => (
        <tr key={kategori} className="border"> 
          <td className="px-4 py-3">{kategori}</td>
          <td className="px-4 py-3 text-right">{jumlah}</td>
        </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="border-t-2 border-[#082052] font-bold text-[#082052]">
          <th className="px-4 py-3">Total</th>
          <td className="px-4 py-3 text-right">{items.length}</td>
        </tr>
      </tfoot>
    </table>
    </div>
  </section>
  )
}