"use client";

import { useEffect, useState } from "react";

function getRemaining() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  const diff = Math.max(0, midnight.getTime() - now.getTime());
  return {
    days: 0,
    hours: Math.floor(diff / 3_600_000),
    mins: Math.floor((diff % 3_600_000) / 60_000),
    secs: Math.floor((diff % 60_000) / 1000),
  };
}

export default function CountdownTimer() {
  const [time, setTime] = useState<ReturnType<typeof getRemaining> | null>(
    null
  );

  useEffect(() => {
    setTime(getRemaining());
    const id = setInterval(() => setTime(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  const units: [string, number][] = [
    ["Days", time.days],
    ["Hours", time.hours],
    ["Mins", time.mins],
    ["Secs", time.secs],
  ];

  return (
    <div className="flex gap-4">
      {units.map(([label, value]) => (
        <div key={label} className="text-center">
          <div className="text-lg font-medium tabular-nums">
            {String(value).padStart(2, "0")}
          </div>
          <div className="text-[10px] uppercase text-zinc-500">{label}</div>
        </div>
      ))}
    </div>
  );
}
