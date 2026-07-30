import type { AppId } from "@/lib/apps";

/**
 * Abstract, line-based icon set — thin geometry rather than
 * illustrative glyphs, so the icon language reads as "engineered"
 * rather than "decorated".
 */
export function AppIcon({ id, className }: { id: AppId; className?: string }) {
  const common = {
    className,
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };
  const stroke = "currentColor";

  switch (id) {
    case "profile":
      return (
        <svg {...common}>
          <circle cx="20" cy="14" r="6.5" stroke={stroke} strokeWidth="1.4" />
          <path
            d="M7 33c1.8-6.5 7-10 13-10s11.2 3.5 13 10"
            stroke={stroke}
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );
    case "work":
      return (
        <svg {...common}>
          <rect x="7" y="12" width="26" height="18" rx="1.5" stroke={stroke} strokeWidth="1.4" />
          <path d="M14 12v-2.5A2 2 0 0 1 16 7.5h8A2 2 0 0 1 26 9.5V12" stroke={stroke} strokeWidth="1.4" />
          <path d="M7 19h26" stroke={stroke} strokeWidth="1.2" />
        </svg>
      );
    case "experience":
      return (
        <svg {...common}>
          <path d="M8 8v24h24" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
          <path d="M12 25l6-7 5 4 8-10" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "skills":
      return (
        <svg {...common}>
          <rect x="7" y="7" width="11" height="11" stroke={stroke} strokeWidth="1.4" />
          <rect x="22" y="7" width="11" height="11" stroke={stroke} strokeWidth="1.4" />
          <rect x="7" y="22" width="11" height="11" stroke={stroke} strokeWidth="1.4" />
          <rect x="22" y="22" width="11" height="11" stroke={stroke} strokeWidth="1.4" />
        </svg>
      );
    case "playground":
      return (
        <svg {...common}>
          <circle cx="20" cy="20" r="13" stroke={stroke} strokeWidth="1.4" />
          <path d="M20 7v26M7 20h26" stroke={stroke} strokeWidth="1" strokeDasharray="2 3" />
        </svg>
      );
    case "lab":
      return (
        <svg {...common}>
          <path d="M16 7h8" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
          <path d="M17 7v9.5L9 30a2 2 0 0 0 1.7 3h18.6a2 2 0 0 0 1.7-3L23 16.5V7" stroke={stroke} strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M13.5 24h13" stroke={stroke} strokeWidth="1.2" />
        </svg>
      );
    case "about":
      return (
        <svg {...common}>
          <circle cx="20" cy="20" r="13" stroke={stroke} strokeWidth="1.4" />
          <path d="M20 18v8" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="20" cy="13.5" r="1.2" fill={stroke} />
        </svg>
      );
    case "contact":
      return (
        <svg {...common}>
          <rect x="6" y="10" width="28" height="20" rx="1.5" stroke={stroke} strokeWidth="1.4" />
          <path d="M6.5 11.5L20 21 33.5 11.5" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return <svg {...common} />;
  }
}
