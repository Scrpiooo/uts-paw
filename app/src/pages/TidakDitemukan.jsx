import {Link} from "react-router-dom"

export default function TidakDitemukan(){
  return(
    <section className="flex-col items-center text-center gap-4">
      <h1 className="text-[64px] font-bold text-[#082052]">404</h1>
      <Link to="/" className="rounded-lg bg-[#082052] px-3 py-2 text-white hover:text-blue-700">Kembali ke beranda</Link>
    </section>
  )
}