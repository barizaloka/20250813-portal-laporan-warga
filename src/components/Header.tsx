// src/components/Header.js
const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Portal Laporan Warga</h1>
        <nav>
          <a href="#" className="text-white hover:text-blue-200 ml-4">Beranda</a>
          <a href="#" className="text-white hover:text-blue-200 ml-4">Tentang</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;