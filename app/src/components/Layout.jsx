import {NavLink, Outlet} from "react-router-dom"

const MENU = [
    { ke: "/", label: "Beranda"},
    { ke: "/koleksi", label: "Koleksi"},
    { ke: "/tambah", label: "Tambah"},
    { ke: "/statistik", label: "Statistik"},
    { ke: "/tentang", label: "Tentang"},
]

export default function Layout(){
    return(
        <div className="flex min-h-screen flex -col">
            <header className="flex flex-col justify-between gap-2 p-4 md:flex-row md:items-center md:px-6">
                <strong>Daftar Tugas</strong>

                <nav className="flex flex-wrap gap-4">
                    {MENU.map(({ke, label}) => (
                    <NavLink key={ke} to={ke} end={ke === `/`} className={({isActive}) => isActive ? `font-semibold` : ``}>
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