import "./style.scss";
import { gsap } from "gsap";
import SplitText from "../../../gsap-bonus/package/src/SplitText";
import { useEffect } from "react";
gsap.registerPlugin(SplitText);
export default function Header() {
  useEffect(() => {
    const split = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineChildren",
    });
    const splitParent = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineParent",
    });
    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
      onComplete: () => {
        gsap.to(split.lines, {
          duration: 0.5, 
          color: "#55B76B",
        });
      },
    });
  }, []);
  return (
    <section className=" header-container" data-scroll-section>
      <h1 id="header-text">Welcome to Greenify</h1>
    </section>
  );
}
