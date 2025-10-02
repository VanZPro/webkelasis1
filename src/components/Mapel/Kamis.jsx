const Kamis = () => {
    return (
        <>
            {/* Mata Kuliah Lab. Pemrograman Dasar */}
            <div className="border-t-2 border-b-2 border-white flex justify-between py-2 w-80 px-3" data-aos="fade-up" data-aos-duration="600">
                <div className="flex flex-col text-left">
                    <span className="text-base font-medium">Lab. Pemrograman Dasar</span>
                    <span className="text-xs opacity-80">Tono Hartono, S.Si, M.T</span>
                    <span className="text-xs opacity-60">Kode: 05130</span>
                    <span className="text-xs opacity-60">Praktikum</span>
                </div>
                <div className="flex flex-col justify-center items-end">
                    <span className="text-sm font-semibold">07.00-08.40</span>
                    <span className="text-xs opacity-80">Ruangan: 7.010</span>
                </div>
            </div>
        </>
    );
}

export default Kamis;