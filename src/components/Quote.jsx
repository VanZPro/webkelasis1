import React from 'react';

const Quote = () => {
    // Daftar kutipan motivasi (tidak berubah)
    const quotes = [
        { quote: "Pendidikan adalah senjata paling ampuh yang bisa kamu gunakan untuk mengubah dunia.", author: "Nelson Mandela" },
        { quote: "Satu-satunya cara untuk melakukan pekerjaan hebat adalah dengan mencintai apa yang kamu lakukan.", author: "Steve Jobs" },
        { quote: "Masa depan adalah milik mereka yang menyiapkan hari ini.", author: "Malcolm X" },
        { quote: "Hiduplah seolah-olah kamu akan mati besok. Belajarlah seolah-olah kamu akan hidup selamanya.", author: "Mahatma Gandhi" },
        { quote: "Jangan berhenti ketika lelah. Berhentilah ketika selesai.", author: "Anonim" },
        { quote: "Percaya kamu bisa dan kamu sudah setengah jalan.", author: "Theodore Roosevelt" },
        { quote: "Kegagalan adalah bumbu yang memberi rasa pada kesuksesan.", author: "Truman Capote" }
    ];

    // Logika memilih kutipan (tidak berubah)
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const quoteIndex = dayOfYear % quotes.length;
    const todayQuote = quotes[quoteIndex];

    return (
        <div 
            // text-center dihapus dari sini agar bisa diatur per elemen
            className="w-max max-w-xs md:max-w-2xl text-white py-8"
            data-aos="fade-up"
            data-aos-delay="500"
        >
            {/* === PERUBAHAN DI BAWAH INI === */}
            <p 
                // Rata kiri di mobile, rata tengah di desktop
                className="text-left md:text-center text-lg md:text-xl font-medium opacity-90 italic"
                style={{
                    textShadow: "0 0 8px rgba(255, 255, 255, 0.4)"
                }}
            >
                "{todayQuote.quote}"
            </p>
            <p 
                // Rata kanan di mobile, rata tengah di desktop
                className="text-right md:text-center text-sm font-semibold mt-3 opacity-70"
            >
                - {todayQuote.author} -
            </p>
             {/* ============================== */}
        </div>
    );
};

export default Quote;