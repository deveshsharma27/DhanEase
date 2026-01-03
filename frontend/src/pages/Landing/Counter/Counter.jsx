import React, { useEffect, useRef } from "react";
import CounterBox from "./CounterBox";
import "./Counter.css";

const Counter = () => {
  const bgRef = useRef(null);

  // Parallax background
  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.12}px) scale(1.08)`;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const stats = [
    {
      end: 12000,
      suffix: "+",
      label: "Active Users",
      desc: "Students and early professionals trust FinGold daily",
    },
    {
      end: 98,
      suffix: "%",
      label: "AI Accuracy",
      desc: "Highly reliable insights backed by smart models",
    },
    {
      end: 50,
      suffix: "+",
      label: "Monthly Insights",
      desc: "Actionable financial recommendations generated",
    },
    {
      end: 24,
      suffix: "/7",
      label: "Smart Monitoring",
      desc: "Always-on tracking to keep spending in control",
    },
  ];

  return (
    <section className="counter-section">
      {/* BACKGROUND */}
      <div className="counter-bg" ref={bgRef}></div>
      <div className="counter-overlay"></div>

      {/* GOLD DIVIDER */}
      <div className="counter-divider"></div>

      {/* HEADER */}
      <div className="counter-header">
        <h2>
          Impact That <span>Builds Confidence</span>
        </h2>
        <p>
          DhanEase empowers students and professionals with AI-driven insights,
          real-time monitoring, and goal-focused financial clarity.
        </p>
      </div>

      {/* COUNTERS */}
      <div className="counter-wrapper">
        {stats.map((item, index) => (
          <CounterBox
            key={index}
            end={item.end}
            suffix={item.suffix}
            label={item.label}
            desc={item.desc}
          />
        ))}
      </div>

      {/* ENGAGEMENT FEATURES */}
      <div className="counter-engage">
        <h4>Why users trust DhanEase</h4>

        <div className="engage-grid">
          <div className="engage-item">AI-powered insights, not assumptions</div>
          <div className="engage-item">Built for students & beginners</div>
          <div className="engage-item">Real-time alerts & analytics</div>
          <div className="engage-item">Secure & privacy-first platform</div>
          
        </div>
      </div>
    </section>
  );
};

export default Counter;
