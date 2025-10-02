const Selasa = () => {
    return (
        <>
            {/* Mata Kuliah Algoritma dan Pemrograman */}
            <div className="border-t-2 border-b-2 border-white flex justify-between py-2 w-80 px-3" data-aos="fade-up" data-aos-duration="600">
                <div className="flex flex-col text-left">
                    <span className="text-base font-medium">Algoritma & Pemrograman (3 SKS)</span>
                    <span className="text-xs opacity-80">Tono Hartono, S.Si, M.T</span>
                    <span className="text-xs opacity-60">Kode: 05129</span>
                </div>
                <div className="flex flex-col justify-center items-end">
                    <span className="text-sm font-semibold">07.00-09.30</span>
                    <span className="text-xs opacity-80">Ruangan: R4516</span>
                </div>
            </div>

            {/* Mata Kuliah Bahasa Inggris */}
            <div className="border-b-2 border-white flex justify-between py-2 w-80 px-3" data-aos="fade-up" data-aos-duration="700">
                <div className="flex flex-col text-left">
                    <span className="text-base font-medium">Bahasa Inggris (2 SKS)</span>
                    <span className="text-xs opacity-80">Ayu Pratiwi Ulfah, S.Hum, M.Hum.</span>
                    <span className="text-xs opacity-60">Kode: 00004</span>
                </div>
                <div className="flex flex-col justify-center items-end">
                    <span className="text-sm font-semibold">09.30-11.10</span>
                    <span className="text-xs opacity-80">Ruangan: R4516</span>
                </div>
            </div>
        </>
    );
}

export default Selasa;