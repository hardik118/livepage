import { FirstSubHeading } from "./component/2subheading";
import Countdown from "./component/countdown";
import SubHeading from "./component/subheading";
import { Questrial } from "next/font/google";

const questrial = Questrial({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const handleCanPlay = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.target as HTMLVideoElement;
    video.play(); // Ensures the video plays as soon as it's ready
  };

  return (
    <div className={`relative h-screen w-full overflow-hidden bg-black ${questrial.className}`}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        preload="auto" // Preload the video to avoid delay
        onCanPlay={handleCanPlay} // Play as soon as the video is ready
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="absolute flex flex-col items-center justify-center w-full h-full text-white gap-4 px-4 text-center">
        <h1 className={`${questrial.className} text-7xl tracking-wide `}>
          <h1 className="flex flex-row justify-center gap-1 ">
            <FirstSubHeading></FirstSubHeading> Equals
          </h1>
          <SubHeading />
        </h1>
        <h3 className="text-xs font-thin sm:text-sm md:text-base">Coming Live Soon.</h3>
        <Countdown />
        <h3 className="text-xs font-thin sm:text-sm md:text-base">Investments That Make You Equal.</h3>
      </div>
    </div>
  );
}
