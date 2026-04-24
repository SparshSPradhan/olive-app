export default function PhoneMockup() {
    return (
      <div className="relative flex justify-center items-end" style={{ minHeight: "480px" }}>
        {/* Ghost cards behind - left */}
        <div
          className="absolute hidden lg:block"
          style={{
            left: "0%",
            bottom: "60px",
            width: "120px",
            height: "160px",
            background: "white",
            borderRadius: "20px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            opacity: 0.55,
            transform: "rotate(-6deg) scale(0.9)",
          }}
        >
          <div style={{ padding: "12px" }}>
            <div
              style={{
                width: "100%",
                height: "80px",
                background: "#e8f0e0",
                borderRadius: "12px",
                marginBottom: "8px",
              }}
            />
            <div
              style={{
                height: "8px",
                background: "#e0e7d8",
                borderRadius: "4px",
                marginBottom: "4px",
              }}
            />
            <div
              style={{
                height: "8px",
                background: "#e0e7d8",
                borderRadius: "4px",
                width: "60%",
              }}
            />
          </div>
        </div>
  
        {/* Ghost cards behind - right */}
        <div
          className="absolute hidden lg:block"
          style={{
            right: "0%",
            bottom: "60px",
            width: "120px",
            height: "160px",
            background: "white",
            borderRadius: "20px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            opacity: 0.55,
            transform: "rotate(6deg) scale(0.9)",
          }}
        >
          <div style={{ padding: "12px" }}>
            <div
              style={{
                width: "100%",
                height: "80px",
                background: "#e8f0e0",
                borderRadius: "12px",
                marginBottom: "8px",
              }}
            />
            <div
              style={{
                height: "8px",
                background: "#e0e7d8",
                borderRadius: "4px",
                marginBottom: "4px",
              }}
            />
            <div
              style={{
                height: "8px",
                background: "#e0e7d8",
                borderRadius: "4px",
                width: "60%",
              }}
            />
          </div>
        </div>
  
        {/* Main Phone */}
        <div
          className="phone-mockup relative z-10"
          style={{ width: "300px", background: "white" }}
        >
          {/* Phone top notch */}
          <div style={{ padding: "8px 16px 0", background: "#1a1a1a" }}>
            <div className="phone-notch" />
          </div>
  
          {/* Phone screen content */}
          <div style={{ background: "#f8f8f8", padding: "0" }}>
            {/* Product image area */}
            <div
              style={{
                background: "#e8ede2",
                height: "130px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              {/* Cracker box illustration */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background: "#c4b89a",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  fontSize: "2rem",
                }}
              >
                🍪
              </div>
            </div>
  
            {/* Product card */}
            <div style={{ background: "white", padding: "16px" }}>
              {/* Product name */}
              <div style={{ marginBottom: "8px" }}>
                <h3
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: "700",
                    color: "#1a2e08",
                    lineHeight: "1.3",
                  }}
                >
                  Fig and Olive Crackers, Fig and Olive
                </h3>
                <p
                  style={{ fontSize: "0.75rem", color: "#6b7280", marginTop: "2px" }}
                >
                  Lesley Stowe
                </p>
              </div>
  
              {/* Score row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                }}
              >
                <div className="score-badge">
                  <span>●</span>
                  <span>46/100</span>
                  <br />
                  <span style={{ fontSize: "0.65rem", fontWeight: "500" }}>
                    Avoid
                  </span>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <HeartIcon />
                  <ShareIcon />
                </div>
              </div>
  
              {/* Oliver Says section */}
              <div
                style={{
                  background: "#fafaf8",
                  borderRadius: "12px",
                  padding: "12px",
                  border: "1px solid #e8ede0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginBottom: "8px",
                  }}
                >
                  <span style={{ fontSize: "1rem" }}>🫒</span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: "700",
                      color: "#1a2e08",
                    }}
                  >
                    Oliver Says:
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.68rem",
                    color: "#4b5563",
                    lineHeight: "1.5",
                  }}
                >
                  "This product's low score mainly comes from the processed
                  sugars, like honey and brown sugar, which can impact your
                  family's health when consumed frequently, especially for kids
                  who are still developing. Additionally, there are several
                  additives that aren't ideal for your goal of avoiding processed
                  foods, making this a choice to consider more carefully."
                </p>
              </div>
  
              {/* Breakdown label */}
              <div
                style={{
                  marginTop: "12px",
                  fontSize: "0.75rem",
                  fontWeight: "600",
                  color: "#1a2e08",
                }}
              >
                Breakdown
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  function HeartIcon() {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#9ca3af"
        strokeWidth="2"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    );
  }
  
  function ShareIcon() {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#9ca3af"
        strokeWidth="2"
      >
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    );
  }