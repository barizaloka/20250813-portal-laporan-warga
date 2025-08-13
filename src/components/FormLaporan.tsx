// src/components/FormLaporan.js
const FormLaporan = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto mb-8">
      <form>
        <div className="mb-4">
          <label htmlFor="jenisLaporan" className="block text-gray-700 font-bold mb-2">Jenis Laporan</label>
          <select id="jenisLaporan" className="w-full p-2 border rounded-md">
            <option>Pilih Jenis Laporan</option>
            <option>Jalan Rusak</option>
            <option>Lampu Mati</option>
            <option>Sampah Menumpuk</option>
            <option>Lainnya</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="deskripsi" className="block text-gray-700 font-bold mb-2">Deskripsi</label>
          <textarea id="deskripsi" rows={4} className="w-full p-2 border rounded-md" placeholder="Jelaskan masalah yang terjadi..."></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="lokasi" className="block text-gray-700 font-bold mb-2">Lokasi</label>
          <input type="text" id="lokasi" className="w-full p-2 border rounded-md" placeholder="Contoh: Jl. Sudirman No. 123" />
        </div>
        <button type="submit" className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600">
          Kirim Laporan
        </button>
      </form>
    </div>
  );
};

export default FormLaporan;