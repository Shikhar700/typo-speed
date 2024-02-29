import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import { useRef } from "react";
import Header from "./components/Header";
import Settings from "./components/settings/Settings";
import { useAppSelector } from "./redux/hooks";

const App = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const containerRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div
        onClick={(event) => {
          let dom = event.target as HTMLElement;
          if (dom.innerText !== "cumtom") {
            containerRef.current?.focus();
          }
        }}
        onMouseOver={() => {
          document.body.style.cursor = "context-menu";
        }}
        className={`${theme} transition-colors duration-100`}
      >
        <main className=" w-full h-full top-0 fixed z-[-1] bg-light"></main>
        <Header />
        <Routes>
          <Route path="/" element={<Home ref={containerRef} />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
