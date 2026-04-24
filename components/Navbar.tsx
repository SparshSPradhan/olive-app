// "use client";

// import Link from "next/link";
// import OliveLogo from "./OliveLogo";

// export default function Navbar() {
//   return (
//     <nav
//       style={{ backgroundColor: "var(--olive-bg)" }}
//       className="w-full sticky top-0 z-50 border-b border-transparent"
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-2 no-underline">
//           <OliveLogo />
//         </Link>

//         {/* Center Nav Links */}
//         {/* <div className="hidden md:flex items-center gap-8"> */}
//         <div className="flex items-center gap-18 ">
//           <button className="nav-link">
//             Solutions
//             <ChevronDown />
//           </button>
//           <button className="nav-link">Features</button>
//           <button className="nav-link">Pricing</button>
//           <button className="nav-link">
//             Blog
//             <ChevronDown />
//           </button>
//           <button className="nav-link">Restaurants</button>
//           <button className="nav-link">
//             Food
//             <ChevronDown />
//           </button>
//         </div>

//         {/* Right Actions */}
//         <div className="flex items-center gap-4">
//           <button className="nav-link">Sign in</button>
//           <a href="#" className="btn-primary">
//             Get Olive
//             <ArrowRight />
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// function ChevronDown() {
//   return (
//     <svg
//       width="14"
//       height="14"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polyline points="6 9 12 15 18 9" />
//     </svg>
//   );
// }

// function ArrowRight() {
//   return (
//     <svg
//       width="14"
//       height="14"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="5" y1="12" x2="19" y2="12" />
//       <polyline points="12 5 19 12 12 19" />
//     </svg>
//   );
// }





"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import OliveLogo from "./OliveLogo";

const NAV_ITEMS = [
  {
    label: "Solutions",
    hasDropdown: true,
    items: ["For Families", "For Nutritionists", "For Dietitians", "For Schools"],
  },
  {
    label: "Features",
    hasDropdown: false,
    items: [],
  },
  {
    label: "Pricing",
    hasDropdown: false,
    items: [],
  },
  {
    label: "Blog",
    hasDropdown: true,
    items: ["Health Tips", "Ingredient Guides", "Family Nutrition", "Recipes"],
  },
  {
    label: "Restaurants",
    hasDropdown: false,
    items: [],
  },
  {
    label: "Food",
    hasDropdown: true,
    items: ["Scan a Product", "Food Database", "Ingredient Library", "Avoid List"],
  },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav
      style={{ backgroundColor: "var(--olive-bg)" }}
      className="w-full sticky top-0 z-50"
    >
      <div
        ref={navRef}
        className="max-w-7xl mx-auto px-6 py-4"
        style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center" }}
      >
        {/* LEFT — Logo */}
        <div className="flex items-center">
          <Link href="/" style={{ textDecoration: "none" }}>
            <OliveLogo />
          </Link>
        </div>

        {/* CENTER — Nav links */}
        {/* <div className="hidden md:flex items-center" style={{ gap: "4px" }}> */}
        <div className="flex items-center" >
          {NAV_ITEMS.map((item) => (
            <div key={item.label} style={{ position: "relative" }}>
              <button
                style={{
                  padding: "6px 10px",
                  borderRadius: "8px",
                  background: openMenu === item.label ? "rgba(45,80,22,0.08)" : "transparent",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                  fontSize: "0.88rem",
                  fontWeight: 500,
                  color: "var(--text-dark)",
                  transition: "background 0.15s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={() => item.hasDropdown && setOpenMenu(item.label)}
                onMouseLeave={() => item.hasDropdown && setOpenMenu(null)}
                onClick={() =>
                  item.hasDropdown &&
                  setOpenMenu(openMenu === item.label ? null : item.label)
                }
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown
                    rotated={openMenu === item.label}
                  />
                )}
              </button>

              {/* Dropdown Panel */}
              {item.hasDropdown && openMenu === item.label && (
                <div
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                  style={{
                    position: "absolute",
                    top: "calc(100% + 8px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "white",
                    borderRadius: "14px",
                    padding: "8px",
                    boxShadow:
                      "0 8px 30px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
                    minWidth: "180px",
                    zIndex: 100,
                    border: "1px solid rgba(0,0,0,0.06)",
                    animation: "dropdownFadeIn 0.15s ease forwards",
                  }}
                >
                  {/* Arrow pointer */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-5px",
                      left: "50%",
                      transform: "translateX(-50%) rotate(45deg)",
                      width: "10px",
                      height: "10px",
                      background: "white",
                      border: "1px solid rgba(0,0,0,0.06)",
                      borderBottom: "none",
                      borderRight: "none",
                    }}
                  />
                  {item.items.map((subItem) => (
                    <a
                      key={subItem}
                      href="#"
                      style={{
                        display: "block",
                        padding: "9px 14px",
                        borderRadius: "8px",
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        color: "var(--text-dark)",
                        textDecoration: "none",
                        transition: "background 0.12s",
                        whiteSpace: "nowrap",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.background = "#f0f4ec")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.background = "transparent")
                      }
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT — Sign in + CTA */}
        <div className="flex items-center justify-end" style={{ gap: "12px" }}>
          <button
            style={{
              padding: "6px 10px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "0.88rem",
              fontWeight: 500,
              color: "var(--text-dark)",
            }}
          >
            Sign in
          </button>
          <a
            href="#"
            className="btn-primary"
            style={{ fontSize: "0.88rem", padding: "10px 20px", gap: "6px" }}
          >
            Get Olive
            <ArrowRight />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes dropdownFadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </nav>
  );
}

function ChevronDown({ rotated }: { rotated?: boolean }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transform: rotated ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.2s",
      }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="13"
      height="13"
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