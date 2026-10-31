import {NavLink, Outlet} from "react-router-dom"
import "./Layout.css"

const MENU = [
    { ke: "/", label: "Beranda"},
    { ke: "/koleksi", label: "Koleksi"},
    { ke: "/tambah", label: "Tambah"},
    { ke: "/statistik", label: "Statistik"},
    { ke: "/tentang", label: "Tentang"},
]

export default function Layout(){
    return(
        <div className="kerangka flex min-h-screen flex-col bg-[#F8F0E5]">
            <header className="kepala flex flex-col justify-between gap-4 p-4 bg-[#082052] md:flex-row md:items-center md:px-6">
                <span className="font-bold text-[#F8F0E5] text-xl">Jurnal Latihan Olahraga</span>

                <nav className="flex flex-wrap items-center gap-5 text-[#F8F0E5]">
                    {MENU.map(({ke, label}) => (
                    <NavLink key={ke} to={ke} end={ke === `/`} className={({isActive}) => `rounded-lg px-3 py-1 transition-colors ${isActive ? 'bg-[#F8F0E5] font-semibold text-black': 'text-[#F8F0E5] hover:bg-[#F8F0E5]/20'}`}>
                        {label}
                    </NavLink>
                ))}
                </nav>
            </header>

            <main className="mx-auto w-full max-w-[960px] flex-1 p-6">
                <Outlet />
            </main>

            <footer className="border-t border-[#dcdcdc] px-6 py-4 text-[0.9rem] text-[#57606a]">
                Ujian Tengah Semester Pengembangan Aplikasi
            </footer>
        </div>
    )
}