"use client";

import PhoneMockup from "./PhoneMockup";

const AVATAR_COLORS = ["#a8c5a0", "#7a9e7e", "#5c8a60", "#3d6b42", "#2d5c35"];

export default function HeroSection() {
  return (
    <section
      style={{ backgroundColor: "var(--olive-bg)" }}
      className="w-full pt-10 pb-0 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Social proof row */}
        <div
          className="flex items-center justify-center gap-3 mb-8 animate-float-up animate-delay-100"
        >
          {/* Avatar stack */}
          <div className="avatar-stack">
            {AVATAR_COLORS.map((color, i) => (
              <div
                key={i}
                className="avatar-circle"
                style={{ background: color }}
              />
            ))}
            <div className="avatar-plus">8+</div>
          </div>
          <span
            style={{
              fontSize: "0.85rem",
              color: "var(--text-muted)",
              fontWeight: "500",
            }}
          >
            Trusted by thousands of healthy families
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="hero-heading animate-float-up animate-delay-200"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)", marginBottom: "1.5rem" }}
        >
          The Safest Way to
          <br />
          Shop for Groceries
        </h1>

        {/* Subheading */}
        <p
          className="animate-float-up animate-delay-300"
          style={{
            fontSize: "1.05rem",
            color: "var(--text-muted)",
            maxWidth: "480px",
            margin: "0 auto 2rem",
            lineHeight: "1.6",
          }}
        >
          Use the Olive Food Scanner App to Instantly Eliminate Harmful
          Ingredients from Your Family&apos;s Diet and Get Expert-Backed Food
          Insights
        </p>

        {/* CTA Buttons */}
        <div
          className="flex items-center justify-center gap-6 animate-float-up animate-delay-400"
          style={{ marginBottom: "3rem" }}
        >
          <a href="#" className="btn-primary" style={{ fontSize: "0.95rem", padding: "14px 28px" }}>
            <AppleIcon />
            Download for iOS
          </a>
          <a href="#" className="btn-secondary" style={{ fontSize: "0.95rem" }}>
            Join the Olive Community
            <ArrowRight />
          </a>
        </div>
      </div>

      {/* Phone Mockup */}
      <div className="max-w-5xl mx-auto px-6 animate-float-up animate-delay-500">
        <PhoneMockup />
      </div>
    </section>
  );
}

function AppleIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 814 1000"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 376.8 40.7 269.2 75.5 160.1c18.6-56.3 69.9-110.6 139-110.6 69.8 0 110.4 39.5 158.1 39.5 45.6 0 91.3-40.8 165.1-40.8 67.8 0 107.2 28.3 137.8 62.8zm-182 45.8c-10.3-20.6-30.2-44.4-73.9-44.4-43 0-82.7 28.7-111.5 28.7-30.4 0-72.4-28.7-111.3-28.7-66 0-133.1 52.4-133.1 167.4 0 79.1 30.8 162.8 68.8 216.1 33.7 46.7 63.6 85.8 109.5 85.8 43.5 0 57.5-27.9 107.4-27.9 49.3 0 64.3 27.9 108.8 27.9 46.2 0 75.8-39.5 112.6-91.2 16.6-23.8 24.3-35.4 37.8-61.9-98.6-37.2-114.2-175.2-13.1-271.8z" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}