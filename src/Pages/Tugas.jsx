import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { tugasData } from '../data/tugasData'; // Impor data
import TugasItem from '../components/TugasItem'; // Impor komponen card

const Tugas = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    }, []);

    // Urutkan data berdasarkan deadline terdekat
    const sortedData = [...tugasData].sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

    return (
        <div className="min-h-screen text-white pt-24 pb-12 px-4">
            <div className="container mx-auto flex flex-col items-center">
                <h1 className="text-4xl font-extrabold mb-8" data-aos="fade-down">
                    Tugas & Pengumuman
                </h1>

                {/* Tampilkan semua tugas dan pengumuman */}
                {sortedData.map(item => (
                    <TugasItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Tugas;