import { useEffect, useState, useRef } from "react";
import SectionHeader from "../SectionHeader";
import { gsap } from 'gsap'
import useOnScreen from "../hooks/useOnSceen";
import SplitText from '../../../gsap-bonus/package/src/SplitText'
import cn from "classnames";
import "./style.scss";


gsap.registerPlugin(SplitText)
export default function Footer() {
  const ref = useRef(null);
  const [reveal, setReveal] = useState(false);

  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) {
      setReveal(onScreen);
    }
  }, [onScreen]);
  useEffect(() =>{
    if(reveal){
    const split = new SplitText("#location-text", {
      type:'lines',
      linesClass: 'lineChildren'
    })
    const splitParent = new SplitText("#location-text", {
      type: "lines",
      linesClass: "lineParent",
    });
 
    gsap.fromTo(split.lines, {y:200}, {
      duration:1,
      y:0,
      stagger: 0.1,
      ease: 'power2',
      
    })
  }
  },[reveal])
  return (
    <section className="footer" data-scroll-section>
      <SectionHeader title="Made By" />
      <h1 ref={ref} className={cn("location", {'is-reveal': reveal})} id="location-text">Refine Studios</h1>
    </section>
  );
}
