export default function OliveLogo() {
    return (
      <div className="flex items-center gap-2">
        {/* Olive icon - green olive with leaf */}
        <svg
          width="36"
          height="36"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Olive body */}
          <ellipse cx="18" cy="24" rx="10" ry="13" fill="#2d5016" />
          {/* Olive shine */}
          <ellipse cx="14" cy="19" rx="3" ry="4" fill="#4a7c2f" opacity="0.6" />
          {/* Stem */}
          <path
            d="M18 11 C18 8, 22 5, 26 7"
            stroke="#2d5016"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          {/* Leaf */}
          <ellipse
            cx="25"
            cy="7"
            rx="5"
            ry="3"
            fill="#4a7c2f"
            transform="rotate(-30 25 7)"
          />
        </svg>
        <span
          style={{
            color: "var(--olive-dark)",
            fontSize: "1.4rem",
            fontWeight: "700",
            letterSpacing: "-0.02em",
          }}
        >
          olive
        </span>
      </div>
    );
  }