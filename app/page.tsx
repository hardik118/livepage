import Countdown from "./component/countdown";
import SubHeading from "./component/subheading";
import { Questrial } from "next/font/google";

const questrial = Questrial({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div className={`relative h-screen w-full overflow-hidden bg-black ${questrial.className}`}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="absolute flex flex-col items-center justify-center w-full h-full text-white gap-4 px-4 text-center">
        <h1 className={`${questrial.className} text-6xl tracking-wide uppercase`}>
          thEquals <SubHeading />
        </h1>
        <h3 className="text-xs font-thin sm:text-sm md:text-base">Coming Live Soon.</h3>
        <Countdown />
        <h3 className="text-xs font-thin sm:text-sm md:text-base">Investments That Make You Equal.</h3>

      </div>
    </div>
  );
}
