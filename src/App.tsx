// src/App.js
import './App.css';

import Header from './components/Header';
import FormLaporan from './components/FormLaporan';
import DaftarLaporan from './components/DaftarLaporan';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold text-center my-6">Sampaikan Laporan Anda</h2>
        <FormLaporan />
        <DaftarLaporan />
      </main>
    </div>
  );
}

export default App;