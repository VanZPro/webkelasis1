import React from 'react';

const TugasItem = ({ item }) => {
    // Fungsi untuk memformat tanggal
    const formatDate = (dateString) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    };

    // Tentukan warna berdasarkan tipe (Tugas atau Pengumuman)
    const cardColor = item.type === 'Tugas' ? 'bg-blue-900/30 border-blue-500/50' : 'bg-yellow-900/30 border-yellow-500/50';
    const tagColor = item.type === 'Tugas' ? 'bg-blue-500/80' : 'bg-yellow-500/80';

    return (
        <div 
            className={`w-full max-w-2xl border ${cardColor} rounded-lg p-5 mb-6 backdrop-blur-sm shadow-lg`}
            data-aos="fade-up"
        >
            {/* === BAGIAN YANG DIUBAH ADA DI BAWAH INI === */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
                {/* Bagian Kiri (Judul) */}
                <div className="flex-grow">
                    <span className={`text-xs font-semibold px-3 py-1 ${tagColor} rounded-full`}>{item.type}</span>
                    <h3 className="text-xl font-bold text-white mt-2">{item.title}</h3>
                    <p className="text-sm text-white/70">{item.subject}</p>
                </div>
                {/* Bagian Kanan (Deadline) */}
                <div className="flex-shrink-0 text-left md:text-right">
                    <p className="text-xs text-white/70">Deadline</p>
                    <p className="text-sm font-semibold text-white">{formatDate(item.deadline)}</p>
                </div>
            </div>
            {/* ======================================== */}

            <p className="text-white/90 text-sm">
                {item.description}
            </p>
        </div>
    );
};

export default TugasItem;