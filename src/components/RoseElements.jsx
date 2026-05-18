export function RoseSVG({ className = '', size = 60 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      fill="none"
    >
      {/* Outer petals */}
      <ellipse cx="50" cy="40" rx="22" ry="30" fill="#a83252" opacity="0.7" transform="rotate(-20 50 50)" />
      <ellipse cx="50" cy="40" rx="22" ry="30" fill="#922845" opacity="0.7" transform="rotate(20 50 50)" />
      <ellipse cx="50" cy="42" rx="20" ry="28" fill="#b33d5c" opacity="0.8" transform="rotate(-50 50 50)" />
      <ellipse cx="50" cy="42" rx="20" ry="28" fill="#b33d5c" opacity="0.8" transform="rotate(50 50 50)" />
      {/* Middle petals */}
      <ellipse cx="50" cy="44" rx="16" ry="22" fill="#c4506a" opacity="0.85" transform="rotate(-10 50 50)" />
      <ellipse cx="50" cy="44" rx="16" ry="22" fill="#c4506a" opacity="0.85" transform="rotate(10 50 50)" />
      {/* Inner petals */}
      <ellipse cx="50" cy="46" rx="11" ry="16" fill="#d4667a" opacity="0.9" transform="rotate(-30 50 50)" />
      <ellipse cx="50" cy="46" rx="11" ry="16" fill="#d4667a" opacity="0.9" transform="rotate(30 50 50)" />
      {/* Center bud */}
      <circle cx="50" cy="44" r="7" fill="#800020" />
      <circle cx="50" cy="43" r="4" fill="#6b001a" />
      {/* Stem */}
      <path d="M50 60 Q48 75 50 95" stroke="#3d6b35" strokeWidth="2.5" fill="none" />
      {/* Leaves */}
      <ellipse cx="43" cy="78" rx="8" ry="4" fill="#4a8c3f" opacity="0.8" transform="rotate(-40 43 78)" />
      <ellipse cx="57" cy="82" rx="7" ry="3.5" fill="#4a8c3f" opacity="0.8" transform="rotate(35 57 82)" />
    </svg>
  );
}

export function HeartSVG({ className = '', size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="#800020"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

export function RoseDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-12 px-8">
      <div className="flex-1 max-w-[180px] h-[1px] bg-gradient-to-r from-transparent via-burgandy/30 to-burgandy/10" />
      <RoseSVG size={50} className="animate-gentle-sway opacity-70" />
      <div className="flex-1 max-w-[180px] h-[1px] bg-gradient-to-l from-transparent via-burgandy/30 to-burgandy/10" />
    </div>
  );
}

export function FloatingRoses({ count = 4 }) {
  const positions = [
    { top: '10%', left: '5%', size: 35, delay: 0, rotate: -15 },
    { top: '20%', right: '8%', size: 30, delay: 1, rotate: 20 },
    { bottom: '15%', left: '3%', size: 40, delay: 2, rotate: -25 },
    { bottom: '10%', right: '5%', size: 28, delay: 0.5, rotate: 10 },
    { top: '50%', left: '2%', size: 25, delay: 1.5, rotate: 30 },
    { top: '60%', right: '3%', size: 32, delay: 2.5, rotate: -10 },
  ];

  return (
    <>
      {positions.slice(0, count).map((pos, i) => (
        <div
          key={i}
          className="absolute pointer-events-none animate-breathe opacity-40"
          style={{
            ...pos,
            animationDelay: `${pos.delay}s`,
            transform: `rotate(${pos.rotate}deg)`,
          }}
        >
          <RoseSVG size={pos.size} />
        </div>
      ))}
    </>
  );
}
