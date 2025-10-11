const Sabtu = () => {
    return (
        <>
            {/* Mata Kuliah Agama Kristen */}
            <div className="border-t-2 border-b-2 border-white flex justify-between py-2 w-80 px-3" data-aos="fade-up" data-aos-duration="600">
                <div className="flex flex-col text-left">
                    <span className="text-base font-medium">Agama Kristen(2 SKS)</span>
                    <span className="text-xs opacity-80">Hendrik Sine, M.Th.</span>
                    <span className="text-xs opacity-60">Kode: 00001 </span>
                </div>
                <div className="flex flex-col justify-center items-end">
                    <span className="text-sm font-semibold">07.50-09.30</span>
                    <span className="text-xs opacity-80">Ruangan: R5205 (Tatap Muka)</span>
                </div>
            </div>
        </>
    );
}

export default Sabtu;