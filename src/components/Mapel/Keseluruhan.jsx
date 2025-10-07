import React from "react";

// Impor semua komponen jadwal harian
import Senin from "./Senin";
import Selasa from "./Selasa";
import Rabu from "./Rabu";
import Kamis from "./Kamis";
import Jumat from "./Jumat";

const Keseluruhan = () => {
    return (
        <div className="flex flex-col items-center gap-10">
            {/* Jadwal Senin */}
            <div className="flex flex-col items-center">
                <h2 className="text-2xl font-medium mb-4 text-white">Monday</h2>
                <Senin />
            </div>

            {/* Jadwal Selasa */}
            <div className="flex flex-col items-center">
                <h2 className="text-2xl font-medium mb-4 text-white">Tuesday</h2>
                <Selasa />
            </div>

            {/* Jadwal Rabu */}
            <div className="flex flex-col items-center">
                <h2 className="text-2xl font-medium mb-4 text-white">Wednesday</h2>
                <Rabu />
            </div>

            {/* Jadwal Kamis */}
            <div className="flex flex-col items-center">
                <h2 className="text-2xl font-medium mb-4 text-white">Thursday</h2>
                <Kamis />
            </div>

            {/* Jadwal Jumat */}
            <div className="flex flex-col items-center">
                <h2 className="text-2xl font-medium mb-4 text-white">Friday</h2>
                <Jumat />
            </div>
        </div>
    );
};

export default Keseluruhan;