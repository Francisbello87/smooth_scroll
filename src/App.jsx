import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Featured from "./components/Featured";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./Styles/home.scss";
import Logo from "./assets/logo.svg";
import useLocoScroll from "./components/hooks/useLocoScroll";

function App() {
  const ref = useRef(null);
  const [preloader, setPreloader] = useState(true);

  useLocoScroll(!preloader)
  const [timer, setTimer] = useState(5);
  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 1) {
      clear();
    }
  }, [timer]);

  return (
    <>
      {preloader ? (
        <div className=" loader-wrapper absolute">
          <img src={Logo} alt="" />
        </div>
      ) : (
        <div
          data-scroll-container
          className="main-container"
          id="main-container"
          ref={ref}
        >
          <Navbar />
          <Header />
          <Featured />
          <About />
          <Gallery />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
