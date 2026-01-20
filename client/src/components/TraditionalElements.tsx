// Traditional Bengali Wedding Elements - Green Door, Betel Leaf, Mukut, etc.
import { CSSProperties } from 'react';

interface ElementProps {
  className?: string;
  style?: CSSProperties;
}

export const GreenDoor = ({ className = "", style }: ElementProps) => (
  <svg viewBox="0 0 120 180" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    {/* Door Frame */}
    <rect x="5" y="10" width="110" height="165" rx="8" fill="hsl(35, 60%, 35%)" stroke="hsl(45, 100%, 50%)" strokeWidth="3"/>
    
    {/* Arch top */}
    <path d="M15 50 Q60 5 105 50 L105 170 L15 170 Z" fill="hsl(140, 45%, 30%)" stroke="hsl(45, 100%, 55%)" strokeWidth="2"/>
    
    {/* Door panels */}
    <rect x="20" y="55" width="35" height="110" rx="4" fill="hsl(145, 50%, 28%)" stroke="hsl(45, 90%, 50%)" strokeWidth="1.5"/>
    <rect x="65" y="55" width="35" height="110" rx="4" fill="hsl(145, 50%, 28%)" stroke="hsl(45, 90%, 50%)" strokeWidth="1.5"/>
    
    {/* Decorative vertical lines on panels */}
    <line x1="28" y1="60" x2="28" y2="160" stroke="hsl(140, 40%, 35%)" strokeWidth="2"/>
    <line x1="37" y1="60" x2="37" y2="160" stroke="hsl(140, 40%, 35%)" strokeWidth="2"/>
    <line x1="47" y1="60" x2="47" y2="160" stroke="hsl(140, 40%, 35%)" strokeWidth="2"/>
    <line x1="73" y1="60" x2="73" y2="160" stroke="hsl(140, 40%, 35%)" strokeWidth="2"/>
    <line x1="82" y1="60" x2="82" y2="160" stroke="hsl(140, 40%, 35%)" strokeWidth="2"/>
    <line x1="92" y1="60" x2="92" y2="160" stroke="hsl(140, 40%, 35%)" strokeWidth="2"/>
    
    {/* Door handles */}
    <circle cx="52" cy="115" r="4" fill="hsl(45, 100%, 50%)" />
    <circle cx="68" cy="115" r="4" fill="hsl(45, 100%, 50%)" />
    
    {/* Arch decoration - fan pattern */}
    <path d="M60 15 L40 45 L50 45 L60 25 L70 45 L80 45 Z" fill="hsl(35, 80%, 50%)" stroke="hsl(45, 100%, 55%)" strokeWidth="1"/>
    <line x1="60" y1="20" x2="35" y2="48" stroke="hsl(45, 100%, 55%)" strokeWidth="1"/>
    <line x1="60" y1="20" x2="45" y2="48" stroke="hsl(45, 100%, 55%)" strokeWidth="1"/>
    <line x1="60" y1="20" x2="55" y2="48" stroke="hsl(45, 100%, 55%)" strokeWidth="1"/>
    <line x1="60" y1="20" x2="65" y2="48" stroke="hsl(45, 100%, 55%)" strokeWidth="1"/>
    <line x1="60" y1="20" x2="75" y2="48" stroke="hsl(45, 100%, 55%)" strokeWidth="1"/>
    <line x1="60" y1="20" x2="85" y2="48" stroke="hsl(45, 100%, 55%)" strokeWidth="1"/>
    
    {/* Banana leaves peeking from top */}
    <ellipse cx="25" cy="8" rx="15" ry="8" fill="hsl(120, 50%, 35%)" transform="rotate(-30 25 8)"/>
    <ellipse cx="95" cy="8" rx="15" ry="8" fill="hsl(120, 50%, 35%)" transform="rotate(30 95 8)"/>
  </svg>
);

export const BetelLeaf = ({ className = "", style }: ElementProps) => (
  <svg viewBox="0 0 60 80" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    {/* Leaf shape */}
    <path 
      d="M30 5 
         Q55 20 50 45 
         Q45 70 30 78 
         Q15 70 10 45 
         Q5 20 30 5"
      fill="hsl(120, 45%, 30%)"
      stroke="hsl(120, 50%, 25%)"
      strokeWidth="1"
    />
    {/* Leaf veins */}
    <path d="M30 10 L30 72" stroke="hsl(120, 40%, 40%)" strokeWidth="1.5" fill="none"/>
    <path d="M30 25 Q40 30 45 35" stroke="hsl(120, 40%, 40%)" strokeWidth="1" fill="none"/>
    <path d="M30 25 Q20 30 15 35" stroke="hsl(120, 40%, 40%)" strokeWidth="1" fill="none"/>
    <path d="M30 40 Q42 45 47 50" stroke="hsl(120, 40%, 40%)" strokeWidth="1" fill="none"/>
    <path d="M30 40 Q18 45 13 50" stroke="hsl(120, 40%, 40%)" strokeWidth="1" fill="none"/>
    <path d="M30 55 Q38 58 43 62" stroke="hsl(120, 40%, 40%)" strokeWidth="1" fill="none"/>
    <path d="M30 55 Q22 58 17 62" stroke="hsl(120, 40%, 40%)" strokeWidth="1" fill="none"/>
    
    {/* Decorative border pattern */}
    <path 
      d="M30 5 Q55 20 50 45 Q45 70 30 78 Q15 70 10 45 Q5 20 30 5"
      fill="none"
      stroke="hsl(45, 100%, 50%)"
      strokeWidth="1"
      strokeDasharray="3 3"
    />
  </svg>
);

export const Mukut = ({ className = "", style }: ElementProps) => (
  <svg viewBox="0 0 100 70" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    {/* Base arc */}
    <path 
      d="M10 65 Q15 55 25 50 Q40 45 50 45 Q60 45 75 50 Q85 55 90 65"
      fill="none"
      stroke="hsl(45, 90%, 50%)"
      strokeWidth="3"
    />
    
    {/* White decorative layers */}
    <path d="M20 50 Q30 40 40 45 Q50 35 60 45 Q70 40 80 50" fill="hsl(0, 0%, 98%)" stroke="hsl(0, 70%, 45%)" strokeWidth="1"/>
    
    {/* Central peak */}
    <path 
      d="M50 8 L42 35 Q50 30 58 35 Z"
      fill="hsl(0, 0%, 98%)"
      stroke="hsl(45, 90%, 50%)"
      strokeWidth="1.5"
    />
    
    {/* Red gem at top */}
    <circle cx="50" cy="12" r="4" fill="hsl(0, 80%, 45%)" stroke="hsl(45, 100%, 55%)" strokeWidth="1"/>
    <circle cx="50" cy="12" r="2" fill="hsl(0, 70%, 60%)"/>
    
    {/* Side decorations */}
    <path d="M35 30 L38 42 Q35 38 32 42 Z" fill="hsl(0, 0%, 98%)" stroke="hsl(45, 90%, 50%)" strokeWidth="1"/>
    <path d="M65 30 L62 42 Q65 38 68 42 Z" fill="hsl(0, 0%, 98%)" stroke="hsl(45, 90%, 50%)" strokeWidth="1"/>
    
    {/* Small red accents */}
    <circle cx="35" cy="35" r="2" fill="hsl(0, 80%, 45%)"/>
    <circle cx="65" cy="35" r="2" fill="hsl(0, 80%, 45%)"/>
    <circle cx="25" cy="48" r="2" fill="hsl(0, 80%, 45%)"/>
    <circle cx="75" cy="48" r="2" fill="hsl(0, 80%, 45%)"/>
    
    {/* Gold bead decorations along base */}
    {[15, 25, 35, 45, 55, 65, 75, 85].map((x, i) => (
      <circle key={i} cx={x} cy="60" r="2.5" fill="hsl(45, 100%, 50%)" />
    ))}
    
    {/* Swirl decorations */}
    <path d="M22 55 Q18 50 22 45 Q28 42 30 48" fill="none" stroke="hsl(45, 90%, 55%)" strokeWidth="1.5"/>
    <path d="M78 55 Q82 50 78 45 Q72 42 70 48" fill="none" stroke="hsl(45, 90%, 55%)" strokeWidth="1.5"/>
  </svg>
);

export const Shankha = ({ className = "", style }: ElementProps) => (
  <svg viewBox="0 0 40 80" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    {/* Conch shell body */}
    <ellipse cx="20" cy="50" rx="15" ry="25" fill="hsl(0, 0%, 95%)" stroke="hsl(45, 60%, 50%)" strokeWidth="1"/>
    
    {/* Spiral decoration */}
    <path 
      d="M20 30 Q25 35 23 42 Q20 50 25 55 Q28 60 22 68"
      fill="none"
      stroke="hsl(350, 70%, 75%)"
      strokeWidth="2"
    />
    
    {/* Red trim at opening */}
    <ellipse cx="20" cy="28" rx="8" ry="4" fill="hsl(0, 70%, 50%)" stroke="hsl(0, 60%, 40%)" strokeWidth="1"/>
    
    {/* Gold band */}
    <rect x="12" y="68" width="16" height="4" rx="1" fill="hsl(45, 100%, 50%)"/>
  </svg>
);

export const Topor = ({ className = "", style }: ElementProps) => (
  <svg viewBox="0 0 60 100" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    {/* Main cone shape */}
    <path 
      d="M30 5 L15 85 Q30 95 45 85 Z"
      fill="hsl(0, 0%, 97%)"
      stroke="hsl(45, 80%, 50%)"
      strokeWidth="1.5"
    />
    
    {/* Decorative bands */}
    <ellipse cx="30" cy="25" rx="8" ry="3" fill="hsl(45, 100%, 55%)" />
    <ellipse cx="30" cy="45" rx="10" ry="3.5" fill="hsl(0, 70%, 50%)" />
    <ellipse cx="30" cy="65" rx="12" ry="4" fill="hsl(45, 100%, 55%)" />
    
    {/* Top ornament */}
    <circle cx="30" cy="8" r="4" fill="hsl(45, 100%, 50%)"/>
    
    {/* Pattern on white parts */}
    <circle cx="30" cy="35" r="2" fill="hsl(0, 70%, 55%)" />
    <circle cx="30" cy="55" r="2" fill="hsl(0, 70%, 55%)" />
    <circle cx="30" cy="75" r="2" fill="hsl(0, 70%, 55%)" />
    
    {/* Cotton puffs at bottom */}
    <circle cx="20" cy="90" r="5" fill="hsl(0, 0%, 100%)" stroke="hsl(0, 0%, 90%)" strokeWidth="0.5"/>
    <circle cx="30" cy="92" r="5" fill="hsl(0, 0%, 100%)" stroke="hsl(0, 0%, 90%)" strokeWidth="0.5"/>
    <circle cx="40" cy="90" r="5" fill="hsl(0, 0%, 100%)" stroke="hsl(0, 0%, 90%)" strokeWidth="0.5"/>
  </svg>
);

export const Dhunuchi = ({ className = "", style }: ElementProps) => (
  <svg viewBox="0 0 50 80" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    {/* Base pot shape - terracotta style */}
    <path 
      d="M10 75 Q5 65 10 55 L15 35 Q25 30 35 35 L40 55 Q45 65 40 75 Q25 80 10 75"
      fill="hsl(15, 70%, 40%)"
      stroke="hsl(15, 60%, 30%)"
      strokeWidth="1.5"
    />
    
    {/* Decorative bands */}
    <ellipse cx="25" cy="50" rx="12" ry="3" fill="hsl(45, 90%, 55%)" />
    <ellipse cx="25" cy="65" rx="14" ry="3" fill="hsl(120, 40%, 35%)" />
    
    {/* Flame/smoke at top */}
    <path d="M25 25 Q30 18 27 10 Q25 5 23 10 Q20 18 25 25" fill="hsl(35, 100%, 55%)" opacity="0.9"/>
    <path d="M22 28 Q18 22 20 15" fill="none" stroke="hsl(35, 100%, 60%)" strokeWidth="2" opacity="0.7"/>
    <path d="M28 28 Q32 22 30 15" fill="none" stroke="hsl(35, 100%, 60%)" strokeWidth="2" opacity="0.7"/>
    
    {/* Handle curves */}
    <path d="M15 45 Q5 45 8 55" fill="none" stroke="hsl(15, 60%, 35%)" strokeWidth="3"/>
    <path d="M35 45 Q45 45 42 55" fill="none" stroke="hsl(15, 60%, 35%)" strokeWidth="3"/>
  </svg>
);
