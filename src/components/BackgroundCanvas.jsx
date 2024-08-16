import React, { useRef, useEffect } from 'react';

export const BackgroundCanvas = ({ wallpaper, theme }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    let colorOffset = 0;

    const animate = () => {
      colorOffset += 0.0005; // Slower color shift
      if (colorOffset > 1) colorOffset = 0;

      const isDark = theme === 'dark';

      switch (wallpaper) {
        case 'Jellyfish':
          gradient.addColorStop(0, `hsl(240, 100%, ${isDark ? 30 : 70}%)`);
          gradient.addColorStop(0.5, `hsl(280, 100%, ${isDark ? 40 : 80}%)`);
          gradient.addColorStop(1, `hsl(320, 100%, ${isDark ? 50 : 90}%)`);
          break;
        case 'Aurora Fox':
          gradient.addColorStop(0, `hsl(120, 100%, ${isDark ? 30 : 70}%)`);
          gradient.addColorStop(0.5, `hsl(180, 100%, ${isDark ? 40 : 80}%)`);
          gradient.addColorStop(1, `hsl(240, 100%, ${isDark ? 50 : 90}%)`);
          break;
        default:
          gradient.addColorStop(0, `hsl(${(colorOffset * 360) % 360}, 70%, ${isDark ? 15 : 85}%)`);
          gradient.addColorStop(0.5, `hsl(${((colorOffset + 0.25) * 360) % 360}, 70%, ${isDark ? 20 : 80}%)`);
          gradient.addColorStop(1, `hsl(${((colorOffset + 0.5) * 360) % 360}, 70%, ${isDark ? 25 : 75}%)`);
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme, wallpaper]);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />;
};