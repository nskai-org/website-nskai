import { useEffect, useRef } from "react";

interface TickerTextProps {
  text: string;
  speed?: number;
}

export default function TickerText({ text, speed = 80 }: TickerTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    // Clone for infinite loop
    const clone = content.cloneNode(true) as HTMLDivElement;
    container.appendChild(clone);

    let animationFrame: number;
    let start: number;
    let x = 0;

    const scroll = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const distance = (elapsed / 1000) * speed;

      x = -distance % content.scrollWidth;
      content.style.transform = `translateX(${x}px)`;
      clone.style.transform = `translateX(${x + content.scrollWidth}px)`;

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrame);
      if (container.contains(clone)) container.removeChild(clone);
    };
  }, [speed, text]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden whitespace-nowrap text-gray-600 py-3"
    >
      <div
        ref={contentRef}
        className="inline-flex items-center gap-16 text-lg font-semibold tracking-wide px-8"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
}
