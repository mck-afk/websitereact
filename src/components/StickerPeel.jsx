import React, { useRef, useState } from 'react';
import './StickerPeel.css';

/**
 * StickerPeel - A React component that mimics the sticker peel effect from https://codepen.io/akapowl/pen/mdrgVgB
 * Usage: <StickerPeel imageSrc="/images/your-sticker.png" alt="Sticker" />
 */
const StickerPeel = ({ imageSrc, alt = 'Sticker', width = 200, height = 200 }) => {
  const stickerRef = useRef(null);
  const [isPeeled, setIsPeeled] = useState(false);
  const [peel, setPeel] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e) => {
    if (isPeeled) return;
    const rect = stickerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPeel({ x, y });
  };

  const handlePointerLeave = () => {
    if (isPeeled) return;
    setPeel({ x: 0, y: 0 });
  };

  const handleClick = () => {
    setIsPeeled(true);
  };

  return (
    <div
      className={`sticker-peel${isPeeled ? ' peeled' : ''}`}
      ref={stickerRef}
      style={{ width, height }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={handleClick}
    >
      <img
        src={imageSrc}
        alt={alt}
        className="sticker-peel-img"
        style={{
          '--peel-x': `${peel.x}%`,
          '--peel-y': `${peel.y}%`,
        }}
      />
      <div className="sticker-peel-corner" />
    </div>
  );
};

export default StickerPeel;
