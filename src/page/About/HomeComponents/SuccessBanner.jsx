import React, { useEffect, useRef, useState } from "react";

export default function BannerCounters({
  targets = [12, 289, 300, 5, 900],
  duration = 1500,
  labels = [
    "Glorious years",
    "Happy clients",
    "Projects complete",
    "Team advisor",
    "Products Sale",
  ],
}) {
  const [values, setValues] = useState(targets.map(() => 0));
  const containerRef = useRef(null);
  const rafRefs = useRef([]);
  const isCounting = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isCounting.current) {
            isCounting.current = true;
            startAllCounts();
          } else if (!entry.isIntersecting && isCounting.current) {
            resetAllCounts();
          }
        });
      },
      { threshold: 0.4 }
    );

    obs.observe(el);

    return () => {
      obs.disconnect();
      rafRefs.current.forEach((id) => cancelAnimationFrame(id));
    };
  }, []);

  function startAllCounts() {
    targets.forEach((target, idx) => startCount(idx, target, duration));
  }

  function resetAllCounts() {
    isCounting.current = false;
    rafRefs.current.forEach((id) => cancelAnimationFrame(id));
    setValues(targets.map(() => 0));
  }

  function startCount(index, target, durationMs) {
    const startTimeRef = { val: null };
    const startValue = 0;

    function step(timestamp) {
      if (!startTimeRef.val) startTimeRef.val = timestamp;
      const elapsed = timestamp - startTimeRef.val;
      const progress = Math.min(elapsed / durationMs, 1);

      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startValue + eased * (target - startValue));

      setValues((prev) => {
        const next = [...prev];
        next[index] = current;
        return next;
      });

      if (progress < 1 && isCounting.current) {
        rafRefs.current[index] = requestAnimationFrame(step);
      }
    }

    rafRefs.current[index] = requestAnimationFrame(step);
  }

  function formatNumber(n) {
    return n.toLocaleString();
  }

  return (
    <section className="py-16 container mx-auto px-1">
      <div
        ref={containerRef}
        className="relative rounded-xl overflow-hidden text-white"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-xl"
          style={{ backgroundImage: "url('/assets/about-9.png')" }}
        ></div>

        {/* Halka green overlay */}
        <div className="absolute inset-0 bg-[#617569]/60 rounded-xl"></div>

        {/* Content */}
        <div className="relative text-center z-10 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 items-center">
            {values.map((val, i) => (
              <div key={i} className="p-6 rounded-2xl">
                <div className="text-7xl font-extrabold transition-all duration-500">
                  {formatNumber(val)}+
                </div>
                <div className="mt-2 text-sm opacity-90">
                  {labels[i] || `Metric ${i + 1}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
