import { useEffect, useState } from 'react';

interface FloatingPetal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

const FloatingPetals = () => {
  const [petals, setPetals] = useState<FloatingPetal[]>([]);

  useEffect(() => {
    const newPetals: FloatingPetal[] = [];
    for (let i = 0; i < 15; i++) {
      newPetals.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 6,
        size: 10 + Math.random() * 15,
      });
    }
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute opacity-60"
          style={{
            left: `${petal.left}%`,
            top: '-20px',
            width: petal.size,
            height: petal.size,
            animation: `fall ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
          }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full text-wedding-orange drop-shadow-sm">
            <ellipse cx="12" cy="12" rx="8" ry="12" fill="currentColor" />
          </svg>
        </div>
      ))}
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingPetals;
