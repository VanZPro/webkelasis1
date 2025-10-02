const Jumat = () => {
    return (
        <>
            {/* Mata Kuliah Pengantar Ilmu Komputer */}
            <div className="border-t-2 border-b-2 border-white flex justify-between py-2 w-80 px-3" data-aos="fade-up" data-aos-duration="600">
                <div className="flex flex-col text-left">
                    <span className="text-base font-medium">Pengantar Ilmu Komputer (2 SKS)</span>
                    <span className="text-xs opacity-80">Bella Hardiyana, S.Kom, M.Kom., Ph.D.</span>
                    <span className="text-xs opacity-60">Kode: 05164</span>
                </div>
                <div className="flex flex-col justify-center items-end">
                    <span className="text-sm font-semibold">07.00-08.40</span>
                    <span className="text-xs opacity-80">Ruangan: R5607 (Tatap Muka)</span>
                </div>
            </div>
        </>
    );
}

export default Jumat;