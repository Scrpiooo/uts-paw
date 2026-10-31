import { Link } from "react-router-dom"

export default function KartuItem({ item }) {
  const { id, judul, kategori, tanggal } = item
  return (
    <article className="rounded-xl border border-[#D8CBB8] bg-white p-5 shadow-sm transition hover:shadow-md">
      <h3 className="mb-2 font-bold">
        <Link to={`/koleksi/${id}`} className="text-[#082052] hover:text-blue-700">
        {judul}</Link>
      </h3>
      <p className="text-sm text-gray-600">
        {kategori} · {tanggal}
      </p>
    </article>
  )
}