import { Playfair_Display } from "next/font/google";
import { Wordchange } from "./component/WordChange";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div className={`relative h-screen w-full overflow-hidden bg-black ${playfair.className}`}>
      {/* First Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-100 animate-fadeIn"
        src="/SFbg.webm"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Second Video (Overlap for Seamless Fade) */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-0 animate-fadeOut"
        src="/SFbg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Content */}
      <div className="absolute flex flex-col items-center justify-center w-full h-full text-white gap-4 px-4 text-center">
  <h1 className="text-4xl sm:text-5xl md:text-6xl flex flex-row gap-2">
    SmartX <Wordchange></Wordchange>
  </h1>
  <h3 className="text-xs sm:text-sm md:text-base">Coming Live Soon.</h3>
</div>
</div>
)
}
