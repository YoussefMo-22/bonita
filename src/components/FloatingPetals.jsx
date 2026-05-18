import { useEffect, useRef } from 'react';

const PETAL_COUNT = 18;

function createPetal(container) {
  const petal = document.createElement('div');
  const size = Math.random() * 16 + 10;
  const startX = Math.random() * window.innerWidth;
  const duration = Math.random() * 8 + 10;
  const delay = Math.random() * 12;
  const direction = Math.random() > 0.5 ? 1 : -1;
  const hue = Math.random() > 0.6 ? 340 : 350;
  const saturation = Math.random() * 30 + 50;

  petal.style.cssText = `
    position: fixed;
    width: ${size}px;
    height: ${size}px;
    left: ${startX}px;
    top: -30px;
    pointer-events: none;
    z-index: 9999;
    opacity: 0;
    animation: ${direction > 0 ? 'floatPetal' : 'floatPetalReverse'} ${duration}s linear ${delay}s infinite;
  `;

  const inner = document.createElement('div');
  inner.style.cssText = `
    width: 100%;
    height: 100%;
    border-radius: 50% 0 50% 50%;
    background: linear-gradient(135deg, hsl(${hue}, ${saturation}%, 55%) 0%, #800020 60%, #5c0018 100%);
    box-shadow: inset 1px -1px 3px rgba(0,0,0,0.15);
    transform: rotate(${Math.random() * 360}deg);
  `;

  petal.appendChild(inner);
  container.appendChild(petal);
  return petal;
}

export default function FloatingPetals() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const petals = [];
    for (let i = 0; i < PETAL_COUNT; i++) {
      petals.push(createPetal(container));
    }

    return () => {
      petals.forEach(p => p.remove());
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[9999]" />;
}
