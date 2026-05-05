"use client";

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  useMotionValue,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        // Trouver tous les éléments de timeline (divs avec flex justify-start)
        const children = Array.from(ref.current.children).filter(
          (child) => child.classList.contains('flex') && child.classList.contains('justify-start')
        );
        
        if (children.length > 0) {
          const lastChild = children[children.length - 1];
          // Utiliser offsetTop et offsetHeight pour un calcul plus précis
          const lastChildBottom = lastChild.offsetTop + lastChild.offsetHeight;
          setHeight(Math.max(0, lastChildBottom));
        } else {
          // Fallback: utiliser scrollHeight
          setHeight(ref.current.scrollHeight);
        }
      }
    };

    updateHeight();
    // Recalculer après le rendu complet
    const timeoutId = setTimeout(updateHeight, 100);
    window.addEventListener('resize', updateHeight);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateHeight);
    };
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, Math.max(height, 0)]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const [animatedHeight, setAnimatedHeight] = useState(0);

  useMotionValueEvent(heightTransform, "change", (latest) => {
    setAnimatedHeight(Math.min(latest, height));
  });

  return (
    <div
      className="w-full bg-background font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-8 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-foreground max-w-4xl">
          Launch your store in 5 minutes
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-md">
          Watch how operators go from "found a winning product" to a live, conversion-ready Shopify store. Before their coffee gets cold.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-6 md:pt-16 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-36 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-muted border border-border p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-muted-foreground">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-muted-foreground">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
            maxHeight: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-border to-transparent to-[100%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,black_100%)]"
        >
          <motion.div
            style={{
              height: animatedHeight + "px",
              maxHeight: height + "px",
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-primary/80 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

