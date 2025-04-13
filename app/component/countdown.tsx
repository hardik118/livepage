"use client";
import { useState, useEffect } from "react";

export default function Countdown() {
  // 🔒 Hardcoded start date: 27 March 2025
  const startDate = new Date("2025-03-27T00:00:00Z");
  const durationInMs = 30 * 24 * 60 * 60 * 1000; // 30 days

  const calculateTimeLeft = () => {
    const now = new Date();
    const endDate = new Date(startDate.getTime() + durationInMs);
    const diff = endDate.getTime() - now.getTime();

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
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
