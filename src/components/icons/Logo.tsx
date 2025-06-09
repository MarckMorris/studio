import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="120"
      height="30"
      aria-label="Scan-ShieldAI Logo"
      {...props}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        d="M10 10 H30 V30 H10 Z M15 15 H25 V25 H15 Z M20 5 L20 45 M5 20 L45 20"
        stroke="url(#logoGradient)"
        strokeWidth="3"
        fill="none"
        transform="translate(5, 0)"
      >
        <animate attributeName="stroke-dasharray" from="0,60" to="60,0" dur="1s" begin="0s" fill="freeze" />
      </path>
      <text
        x="50"
        y="32"
        fontFamily="Inter, sans-serif"
        fontSize="24"
        fontWeight="600"
        fill="hsl(var(--foreground))"
      >
        Scan-ShieldAI
      </text>
    </svg>
  );
}
