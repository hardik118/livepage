"use client";
import { useState, useEffect } from "react";

export default function Countdown() {
  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + 1); // Set target to one month from now

  const calculateTimeLeft = () => {
    const difference = Number(targetDate) - Number(new Date()); // Explicitly cast to number
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };
  

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center text-center space-x-4 text-md font-bold">
      <div className="flex flex-col">
        <span>{timeLeft.days}</span>
        <span className="text-sm font-normal">Days</span>
      </div>
      <div className="flex flex-col">
        <span>{timeLeft.hours}</span>
        <span className="text-sm font-normal">Hours</span>
      </div>
      <div className="flex flex-col">
        <span>{timeLeft.minutes}</span>
        <span className="text-sm font-normal">Minutes</span>
      </div>
      <div className="flex flex-col">
        <span>{timeLeft.seconds}</span>
        <span className="text-sm font-normal">Seconds</span>
      </div>
    </div>
  );
}
