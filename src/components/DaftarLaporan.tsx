// src/components/DaftarLaporan.js
const laporanDummy = [
  {
    id: 1,
    jenis: 'Jalan Rusak',
    deskripsi: 'Ada lubang besar di tengah jalan, membahayakan pengendara motor.',
    lokasi: 'Jl. Ahmad Yani, depan gang 5',
    status: 'Menunggu',
    tanggal: '13 Agustus 2025'
  },
  {
    id: 2,
    jenis: 'Sampah Menumpuk',
    deskripsi: 'Sampah di TPS sudah meluber ke jalan dan menimbulkan bau tidak sedap.',
    lokasi: 'TPS Tegal Sari',
    status: 'Diproses',
    tanggal: '12 Agustus 2025'
  },
  {
    id: 3,
    jenis: 'Lampu Mati',
    deskripsi: 'Lampu penerangan jalan mati di sepanjang jalan masuk komplek.',
    lokasi: 'Komplek Permata Hijau Blok C',
    status: 'Selesai',
    tanggal: '10 Agustus 2025'
  }
];

const DaftarLaporan = () => {
  // Fungsi untuk menentukan warna badge status
  const getStatusColor = (status: any) => {
    switch (status) {
      case 'Menunggu':
        return 'bg-yellow-100 text-yellow-800';
      case 'Diproses':
        return 'bg-blue-100 text-blue-800';
      case 'Selesai':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="mt-8">
      <h3 className="text-xl font-bold mb-4">Daftar Laporan Terkini</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {laporanDummy.map(laporan => (
          <div key={laporan.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold text-gray-800">{laporan.jenis}</h4>
              <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getStatusColor(laporan.status)}`}>
                {laporan.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">{laporan.deskripsi}</p>
            <div className="text-xs text-gray-500">
              <p className="mb-1">
                <span className="font-medium">Lokasi:</span> {laporan.lokasi}
              </p>
              <p>
                <span className="font-medium">Tanggal:</span> {laporan.tanggal}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DaftarLaporan;