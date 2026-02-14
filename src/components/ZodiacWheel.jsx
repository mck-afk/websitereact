import React, { useRef, useEffect, useState } from "react";

const ZodiacWheel = ({ backgroundImageSrc = null }) => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  const [highlightIndex, setHighlightIndex] = useState(null);
  const [highlightOpposite, setHighlightOpposite] = useState(null);

  const sections = 12;

  // ✅ INVERTED ORDER
  const axisLabels = [
    "Spiritual",
    "Social",
    "Material",
    "Mental",
    "Emotional",
    "Physical",
  ];

  const drawWheel = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const r = Math.min(w, h) / 2;

    ctx.clearRect(0, 0, w, h);

    // Background image
    if (imageRef.current && imageRef.current.complete) {
      ctx.save();
      ctx.globalAlpha = 0.5;
      ctx.drawImage(imageRef.current, 0, 0, w, h);
      ctx.restore();
    }

    for (let i = 0; i < sections; i++) {
      const start = (i / sections) * 2 * Math.PI;
      const end = ((i + 1) / sections) * 2 * Math.PI;
      const mid = (start + end) / 2;

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r, start, end);
      ctx.closePath();

      const isHighlighted =
        highlightIndex === i || highlightOpposite === i;

      ctx.fillStyle = isHighlighted ? "#d9b8ff" : "rgba(0,0,0,0)";
      ctx.strokeStyle = "#333";
      ctx.lineWidth = 2;
      ctx.fill();
      ctx.stroke();

      // ✅ Draw upright label
      if (isHighlighted) {
        const axisIndex = i % 6;
        const label = axisLabels[axisIndex];

        const textRadius = r * 0.65;
        const textX = cx + Math.cos(mid) * textRadius;
        const textY = cy + Math.sin(mid) * textRadius;

        ctx.save();
        ctx.translate(textX, textY);

        // Rotate to match wedge
        ctx.rotate(mid);

        // ✅ Flip if on bottom half so text is never upside down
        if (mid > Math.PI / 2 && mid < (3 * Math.PI) / 2) {
          ctx.rotate(Math.PI);
        }

        ctx.fillStyle = "#333";
        ctx.font = "bold 16px serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.restore();
      }
    }

    // Center circle
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, 60, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = "#d9b8ff";
    ctx.strokeStyle = "#333";
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#333";
    ctx.font = "bold 18px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    if (highlightIndex !== null) {
      ctx.fillText(axisLabels[highlightIndex % 6], cx, cy);
    } else {
      ctx.fillText("hover here", cx, cy);
    }

    ctx.restore();
  };

  useEffect(() => {
    drawWheel();
  }, [highlightIndex, highlightOpposite]);

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.onload = () => drawWheel();
    }
  }, []);

  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    const dx = x - cx;
    const dy = y - cy;

    const r = Math.min(canvas.width, canvas.height) / 2 - 10;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > r) {
      setHighlightIndex(null);
      setHighlightOpposite(null);
      return;
    }

    let angle = Math.atan2(dy, dx);
    if (angle < 0) angle += 2 * Math.PI;

    const section = Math.floor(angle / (2 * Math.PI / sections));
    const opposite = (section + 6) % sections;

    setHighlightIndex(section);
    setHighlightOpposite(opposite);
  };

  const handleMouseLeave = () => {
    setHighlightIndex(null);
    setHighlightOpposite(null);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "32px auto",
        width: "100%",
      }}
    >
      {backgroundImageSrc && (
        <img
          ref={imageRef}
          src={backgroundImageSrc}
          alt="Zodiac Background"
          style={{ display: "none" }}
        />
      )}

      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default ZodiacWheel;
