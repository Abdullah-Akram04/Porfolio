import React from 'react';

// Generated at module level so values are stable across renders
const bubbles = [
  { id: 0,  size: 22,  left: 3,   delay: 0,    duration: 12 },
  { id: 1,  size: 38,  left: 9,   delay: 3.5,  duration: 16 },
  { id: 2,  size: 18,  left: 15,  delay: 1.2,  duration: 10 },
  { id: 3,  size: 55,  left: 21,  delay: 6.0,  duration: 18 },
  { id: 4,  size: 28,  left: 27,  delay: 2.4,  duration: 14 },
  { id: 5,  size: 44,  left: 33,  delay: 7.8,  duration: 11 },
  { id: 6,  size: 20,  left: 40,  delay: 0.8,  duration: 17 },
  { id: 7,  size: 62,  left: 46,  delay: 4.2,  duration: 13 },
  { id: 8,  size: 32,  left: 52,  delay: 9.1,  duration: 15 },
  { id: 9,  size: 50,  left: 58,  delay: 1.8,  duration: 12 },
  { id: 10, size: 24,  left: 64,  delay: 5.5,  duration: 19 },
  { id: 11, size: 36,  left: 70,  delay: 3.0,  duration: 10 },
  { id: 12, size: 58,  left: 76,  delay: 8.3,  duration: 16 },
  { id: 13, size: 26,  left: 82,  delay: 0.4,  duration: 14 },
  { id: 14, size: 42,  left: 88,  delay: 6.7,  duration: 11 },
  { id: 15, size: 16,  left: 94,  delay: 2.1,  duration: 18 },
  { id: 16, size: 48,  left: 12,  delay: 10.5, duration: 13 },
  { id: 17, size: 20,  left: 37,  delay: 4.9,  duration: 17 },
  { id: 18, size: 34,  left: 61,  delay: 7.2,  duration: 15 },
  { id: 19, size: 70,  left: 85,  delay: 1.5,  duration: 20 },
];

const AnimatedBackground = () => (
  <div className="animated-bg-root">
    {/* Drifting smoke / fluid blobs */}
    <div className="smoke-blob smoke-blob-1" />
    <div className="smoke-blob smoke-blob-2" />
    <div className="smoke-blob smoke-blob-3" />

    {/* Rising bubbles */}
    {bubbles.map(b => (
      <div
        key={b.id}
        className="bubble"
        style={{
          width: `${b.size}px`,
          height: `${b.size}px`,
          left: `${b.left}%`,
          animationDelay: `${b.delay}s`,
          animationDuration: `${b.duration}s`,
        }}
      />
    ))}
  </div>
);

export default AnimatedBackground;
