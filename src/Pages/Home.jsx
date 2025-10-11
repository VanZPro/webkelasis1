import BoxClassIg from "../components/BoxClassIg"
import BoxTextAnonim from "../components/BoxTextAnonim"
import Navbar from "../components/Navbar"
import Quote from "../components/Quote"

const Home = () => {
  return (
    <div
      className="text-white px-[10%] bg-gradient-to-br from-[#20c997] via-[#3bc9db] to-[#4dabf7]"
      id="Home"
    >
        <Navbar />

        {/* --- Mobile --- */}
        {/* Struktur diubah menggunakan flexbox agar stabil */}
        <div className="lg:hidden min-h-screen flex flex-col">
            {/* Div ini untuk konten utama Anda */}
            <div>
                <div className="font-bold text-4xl text-center pt-20">IS.FIRSTCHAPTER</div>
                <div
                  className="border-2 flex justify-between px-10 text-4xl font-bold py-2 mt-8"
                  id="TotalSiswa"
                >
                  <div id="AngkaGradientBlue" className="flex items-center justify-center ">25</div>
                  <div className="">
                    <span id="AngkaGradientBlue" className="text-5xl">3</span>
                    <span id="AngkaGradientPink" className="text-5xl">8</span>
                  </div>
                  <div id="AngkaGradientPink" className="flex items-center justify-center">13</div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-7 md:gap-5 mt-8">
                  <div className="grid gap-2 md:gap-0 md:grid-cols-1">
                    <BoxClassIg />
                  </div>
                  <div className="grid gap-2 md:gap-0 md:grid-cols-1">
                    <BoxTextAnonim />
                  </div>
                </div>
            </div>

            {/* Spacer ini akan mendorong kutipan ke bawah */}
            <div className="flex-grow"></div>

            {/* Kutipan sekarang berada di paling bawah secara alami */}
            <div className="w-full pb-10">
                <Quote />
            </div>
        </div>

         {/* --- Desktop (Tidak ada perubahan) --- */}
        <div className="hidden lg:block">
          <div className="flex justify-center items-center flex-col h-screen text-center relative">
            <h5 className="text-[1.4rem] font-semibold">Hi, Visitor!</h5>
            <h1
              className="text-7xl font-extrabold text-white"
              style={{
                textShadow:
                  "0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6), 0 0 40px rgba(255,255,255,0.4)",
              }}
            >
              WELCOME
            </h1>
            <h2
              className="text-3xl font-bold text-white mt-2"
              style={{
                textShadow:
                  "0 0 8px rgba(255,255,255,0.7), 0 0 15px rgba(255,255,255,0.5), 0 0 30px rgba(255,255,255,0.3)",
              }}
            >
              TO
            </h2> 
            <h6
              className="text-sm tracking-[5px] mt-2 text-white"
              style={{
                textShadow:
                  "0 0 5px rgba(255,255,255,0.6), 0 0 10px rgba(255,255,255,0.4), 0 0 20px rgba(255,255,255,0.2)",
              }}
            >
              IS.FIRSTCHAPTER
            </h6>
            <div className="absolute bottom-10">
                <Quote />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home;