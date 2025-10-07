import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Senin = React.lazy(() => import("../components/Mapel/Senin"));
const Selasa = React.lazy(() => import("../components/Mapel/Selasa"));
const Rabu = React.lazy(() => import("../components/Mapel/Rabu"));
const Kamis = React.lazy(() => import("../components/Mapel/Kamis"));
const Jumat = React.lazy(() => import("../components/Mapel/Jumat"));
const Keseluruhan = React.lazy(() => import("../components/Mapel/Keseluruhan"));

const Schedule = () => {
    const [viewAll, setViewAll] = useState(false);

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = daysOfWeek[new Date().getDay()];

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const dayComponents = [null, Senin, Selasa, Rabu, Kamis, Jumat, null];
    const TodayComponent = dayComponents[new Date().getDay()];

    return (
        <>
            <div className="lg:flex lg:justify-center lg:gap-32 lg:mb-32 lg:mt-16">
                <div className="text-white flex flex-col justify-center items-center mt-8 md:mt-3 overflow-y-hidden">
                    <React.Suspense fallback={<p>Loading...</p>}>
                        {viewAll ? (
                            // Tampilan jadwal keseluruhan
                            <div>
                                <Keseluruhan />
                                <div
                                    onClick={() => setViewAll(false)}
                                    className="text-white flex justify-center py-4 mt-8 opacity-60 text-xs cursor-pointer hover:opacity-100 transition-opacity"
                                >
                                    Back to Today's Schedule
                                </div>
                            </div>
                        ) : (
                            // Tampilan default (jadwal hari ini + tombol baru)
                            <>
                                <div className="text-2xl font-medium mb-5" data-aos="fade-up" data-aos-duration="500">
                                    {currentDay}
                                </div>
                                <div data-aos="fade-up" data-aos-duration="400">
                                    {TodayComponent ? (
                                        <TodayComponent />
                                    ) : (
                                        <p className="opacity-50">Tidak Ada Jadwal Hari Ini</p>
                                    )}
                                </div>

                                {/* === TOMBOL VIEW MORE YANG BARU === */}
                                <div
                                    onClick={() => setViewAll(true)}
                                    className="
                                        mt-10 px-6 py-2 text-sm text-white font-semibold
                                        bg-white/10 border border-white/20 rounded-lg
                                        cursor-pointer transition-all duration-300
                                        hover:bg-white/20 hover:border-white/40
                                    "
                                    style={{
                                        boxShadow: "0 0 15px rgba(150, 200, 255, 0.25), 0 0 20px rgba(150, 200, 255, 0.15)"
                                    }}
                                >
                                    View All Schedules &raquo;
                                </div>
                                {/* ================================= */}
                            </>
                        )}
                    </React.Suspense>
                </div>
            </div>
        </>
    );
};

export default Schedule;