interface LogoProps {
  className?: string;
}

export default function Logo({ className = "w-12 h-12" }: LogoProps) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Fingerprint ridges */}
      <path 
        d="M50 20C61 20 70 29 70 40C70 51 61 60 50 60" 
        className="stroke-primary" 
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path 
        d="M50 25C58 25 65 32 65 40C65 48 58 55 50 55" 
        className="stroke-primary" 
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path 
        d="M50 30C55 30 60 35 60 40C60 45 55 50 50 50" 
        className="stroke-primary" 
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path 
        d="M50 35C52 35 55 37 55 40C55 43 52 45 50 45" 
        className="stroke-primary" 
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      
      {/* Left side arcs */}
      <path 
        d="M30 40C30 29 39 20 50 20" 
        className="stroke-primary" 
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path 
        d="M35 40C35 32 41 25 50 25" 
        className="stroke-primary" 
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path 
        d="M40 40C40 35 44 30 50 30" 
        className="stroke-primary" 
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path 
        d="M45 40C45 37 47 35 50 35" 
        className="stroke-primary" 
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      
      {/* PTB Letters */}
      <text 
        x="50" 
        y="78" 
        fontSize="18" 
        fontWeight="600" 
        textAnchor="middle" 
        className="fill-primary"
        fontFamily="serif"
      >
        PTB
      </text>
    </svg>
  );
}
