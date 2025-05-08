import { SlidingNumber } from "@/components/ui/sliding-number";
import { useEffect, useState } from "react";
import isPastTime from "@/utils/isPastTime";

type Props = {
  targetDate: Date;
};

export default function Countdown({ targetDate }: Props) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = targetDate.getTime() - new Date().getTime();

    // Return all zeros if the date has passed
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${
        isPastTime(targetDate.toISOString())
          ? "text-red-400"
          : "text-emerald-400"
      } flex items-center gap-0.5 font-mono text-xs`}
    >
      <SlidingNumber value={timeLeft.days} padStart={true} />
      <span className="text-zinc-500">d</span>
      <span className="mx-1"></span>
      <SlidingNumber value={timeLeft.hours} padStart={true} />
      <span className="text-zinc-500">:</span>
      <SlidingNumber value={timeLeft.minutes} padStart={true} />
      <span className="text-zinc-500">:</span>
      <SlidingNumber value={timeLeft.seconds} padStart={true} />
    </div>
  );
}
