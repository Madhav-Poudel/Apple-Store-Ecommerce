import React, { useRef, useState } from "react";

const iphoneImages = Array.from({ length: 36 }, (_, i) => `/src/assets/iphone17-${i + 1}.jpg`);

export default function Iphone17Showcase() {
  const [imgIdx, setImgIdx] = useState(0);
  const dragging = useRef(false);
  const lastX = useRef(0);

  const rotateImage = (dir: number) => {
    setImgIdx((prev) => (prev + dir + iphoneImages.length) % iphoneImages.length);
  };

  // Drag logic
  const handleDragStart = (e: React.MouseEvent<HTMLImageElement>) => {
    dragging.current = true;
    lastX.current = e.clientX;
  };
  const handleDragEnd = () => {
    dragging.current = false;
  };
  const handleDrag = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!dragging.current) return;
    const delta = e.clientX - lastX.current;
    if (Math.abs(delta) > 10) {
      rotateImage(delta > 0 ? 1 : -1);
      lastX.current = e.clientX;
    }
  };

  // Use placeholder if no images
  const imgSrc = iphoneImages[imgIdx] || "/src/assets/iphone-hero.jpg";

  return (
    <div className="relative flex flex-col items-center justify-center scale-in">
      <h2 className="text-3xl font-bold mb-4 text-apple-text">iPhone 17 Pro Max</h2>
      <div className="relative w-80 h-80 flex items-center justify-center bg-gradient-to-br from-apple-bg/10 to-apple-bg/30 rounded-2xl shadow-lg">
        <img
          src={imgSrc}
          alt="iPhone 17 Pro Max"
          className="w-full h-full object-contain select-none"
          draggable={false}
          id="iphone-360-img"
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onMouseMove={handleDrag}
        />
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white"
          onClick={() => rotateImage(-1)}
          aria-label="Rotate Left"
        >
          &#8592;
        </button>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white"
          onClick={() => rotateImage(1)}
          aria-label="Rotate Right"
        >
          &#8594;
        </button>
      </div>
      <p className="mt-4 text-apple-text-muted text-center">Drag or use arrows to rotate. Add images named iphone17-1.jpg, iphone17-2.jpg, ... in assets for full 360°.</p>
    </div>
  );
}
