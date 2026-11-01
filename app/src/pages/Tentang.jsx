import mahasiswa from "../../mahasiswa.json"

const REPO = "https://github.com/Scrpiooo/uts-paw.git"

export default function Tentang(){
  const {nama, nim, kelas, tema} = mahasiswa
  return(
    <section>
      <div className="w-full px-2 py-3 max-w-[450px] rounded-xl border bg-white shadow-sm">
        <h1 className="text-[#082052] font-bold text-[24px]">Tentang</h1>
        <dl className="space-y-2 mt-4">
          <dt className="text-sm text-[#57606A]">Nama</dt>
          <dd className="font-medium text-[#082052]">{nama}</dd>
          <dt className="text-sm text-[#57606A]">NIM</dt>
          <dd className="font-medium text-[#082052]">{nim}</dd>
          <dt className="text-sm text-[#57606A]">Kelas</dt>
          <dd className="font-medium text-[#082052]">{kelas}</dd>
          <dt className="text-sm text-[#57606A]">Tema</dt>
          <dd className="font-medium text-[#082052]">{tema}</dd>
        </dl>

        <div className="mt-8">
          <p>
            <span className="text-sm text-[#57606A]">Kode sumber: </span>
            <a href={REPO} className="underline text-blue-700">{REPO} </a>
          </p>
        </div>
      </div>
    </section>
  )
}