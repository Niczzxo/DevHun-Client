import { useEffect } from "react";
import { gsap } from "gsap";

/**
 * A reusable hook to safely trigger GSAP stagger animations
 * on elements with the '.stagger-item' class.
 * Uses gsap.context for React 18+ strict mode safety.
 *
 * @param {React.MutableRefObject} containerRef - The ref of the container wrapping the stagger items.
 * @param {Array} dependencies - The dependencies array to re-trigger the animation (e.g., when data loads).
 */
const useGsapStagger = (containerRef, dependencies = []) => {
  useEffect(() => {
    if (!containerRef.current) return;

    // Use gsap.context to isolate animations and allow for easy cleanup
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".stagger-item",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "all"
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, ...dependencies]);
};

export default useGsapStagger;
