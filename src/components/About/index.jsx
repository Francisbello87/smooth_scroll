import { useEffect, useRef, useState } from "react";
import SectionHeader from "../SectionHeader";
import { gsap } from "gsap";
import SplitText from "../../../gsap-bonus/package/src/SplitText";
import "./style.scss";
import useOnScreen from "../hooks/useOnSceen";
import cn from "classnames";
gsap.registerPlugin(SplitText);

export default function About() {
  const ref = useRef();
  const [reveal, setReveal] = useState(false);

  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) {
      setReveal(onScreen);
    }
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headline", {
        type: "lines",
        // linesClass: 'lineChildren'
      });

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "power2",
      });
    }
  }, [reveal]);
  return (
    <section className={"about-section"} data-scroll-section>
      <SectionHeader title="About" />
      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
        At Greenify, we are more than just an e-commerce website; we are a
        passionate community dedicated to fostering a sustainable and
        eco-friendly lifestyle. Our mission is to empower environmentally
        conscious consumers by offering a curated selection of high-quality,
        sustainable products that inspire positive change and make a difference
        in the world.
      </p>
    </section>
  );
}
