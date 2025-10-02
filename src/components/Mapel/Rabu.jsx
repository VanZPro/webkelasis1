const Rabu = () => {
    return (
        <>
            {/* Mata Kuliah Matematika I */}
            <div className="border-t-2 border-b-2 border-white flex justify-between py-2 w-80 px-3" data-aos="fade-up" data-aos-duration="600">
                <div className="flex flex-col text-left">
                    <span className="text-base font-medium">Matematika I (3 SKS)</span>
                    <span className="text-xs opacity-80">Lusi Melian, S.Si, MT</span>
                    <span className="text-xs opacity-60">Kode: 05102</span>
                </div>
                <div className="flex flex-col justify-center items-end">
                    <span className="text-sm font-semibold">07.00-09.30</span>
                    <span className="text-xs opacity-80">Ruangan: R5204</span>
                </div>
            </div>

            {/* Waktu Istirahat Panjang */}
            <div className="flex justify-between py-2 w-80 px-3 opacity-60" data-aos="fade-up" data-aos-duration="700">
                <div className="w-[50%] text-base font-medium">Istirahat</div>
                <div className="flex justify-center items-center text-sm">09.30 - 12.50</div>
            </div>

            {/* Mata Kuliah Hardware Komputer */}
            <div className="border-t-2 border-b-2 border-white flex justify-between py-2 w-80 px-3" data-aos="fade-up" data-aos-duration="800">
                <div className="flex flex-col text-left">
                    <span className="text-base font-medium">Hardware Komputer (3 SKS)</span>
                    <span className="text-xs opacity-80">Yudistira Soegoto, S.Kom., M.Kom.</span>
                    <span className="text-xs opacity-60">Kode: 00006</span>
                </div>
                <div className="flex flex-col justify-center items-end">
                    <span className="text-sm font-semibold">12.50-15.20</span>
                    <span className="text-xs opacity-80">Ruangan: R610 (Praktikum)</span>
                </div>
            </div>
        </>
    );
}

export default Rabu;