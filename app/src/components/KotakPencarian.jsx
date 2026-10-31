export default function KotakPencarian({ nilai, onUbah }) {
  return (
    <input
      type="search"
      placeholder="Cari judul..."
      aria-label="Cari judul"
      value={nilai}
      onChange={(e) => onUbah(e.target.value)}
      className="rounded-lg border border-[#D8CBB8] bg-white px-4 py-2 outline-none focus:border-[#082052] "
    />
  )
}