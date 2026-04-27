const ArcReLogo = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 500 200"
    className={className}
    role="img"
    aria-label="Arc Re"
  >
    <defs>
      <style>{`.cls-text { font-family: "Playfair Display", "Baskerville", "Georgia", "Times New Roman", serif; font-size: 85px; fill: currentColor; letter-spacing: 0.05em; } .cls-arc { fill: currentColor; }`}</style>
    </defs>
    <path className="cls-arc" d="M 90 85 Q 250 15 410 85 Q 250 35 90 85 Z" />
    <text x="250" y="165" textAnchor="middle" className="cls-text">ARC RE</text>
  </svg>
);

export default ArcReLogo;
