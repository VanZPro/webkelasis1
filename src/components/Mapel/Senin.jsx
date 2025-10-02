const Senin = () => {
    return (
        <>
            {/* Mata Kuliah Agama */}
            <div className="border-t-2 border-b-2 border-white flex justify-between py-2 w-80 px-3" data-aos="fade-up" data-aos-duration="600">
                <div className="flex flex-col text-left">
                    <span className="text-base font-medium">Agama (2 SKS)</span>
                    <span className="text-xs opacity-80">Dr. Fahmy Lukman, M.Hum</span>
                    <span className="text-xs opacity-60">Kode: 00001</span>
                </div>
                <div className="flex flex-col justify-center items-end">
                    <span className="text-sm font-semibold">08.40-10.20</span>
                    <span className="text-xs opacity-80">Ruangan: R5607</span>
                </div>
            </div>

            {/* Waktu Istirahat */}
            <div className="flex justify-between py-2 w-80 px-3 opacity-60" data-aos="fade-up" data-aos-duration="700">
                <div className="w-[50%] text-base font-medium">Istirahat</div>
                <div className="flex justify-center items-center text-sm">10.20 - 13.40</div>
            </div>

            {/* Mata Kuliah Bahasa Indonesia */}
            <div className="border-t-2 border-b-2 border-white flex justify-between py-2 w-80 px-3" data-aos="fade-up" data-aos-duration="800">
                <div className="flex flex-col text-left">
                    <span className="text-base font-medium">Bahasa Indonesia (2 SKS)</span>
                    <span className="text-xs opacity-80">Taufik Setyadi Aras, M.Hum.</span>
                    <span className="text-xs opacity-60">Kode: 00002</span>
                </div>
                <div className="flex flex-col justify-center items-end">
                    <span className="text-sm font-semibold">13.40-15.20</span>
                    <span className="text-xs opacity-80">Ruangan: R4516</span>
                </div>
            </div>
        </>
    );
}

export default Senin;