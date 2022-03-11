import { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import "./App.css";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Preview from "./components/Preview/Preview";
import "@creative-fonts/edge-of-the-galaxy";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <BrowserRouter>
        <div className={darkMode ? "dark-mode" : "light-mode"}>
          <div className="app">
            <div className="navbar">
              <div className="logo">
                <p>{"{ c-f }"}</p>
              </div>
              <div className="right-nav">
                <ul>
                  <p>
                    <NavLink to="/" activeclassname="active">
                      Home
                    </NavLink>
                  </p>
                  <p>
                    <NavLink to="/preview" activeclassname="active">
                      Preview fonts
                    </NavLink>
                  </p>
                  <p>
                    <NavLink to="/about" activeclassname="active">
                      About
                    </NavLink>
                  </p>
                </ul>
                <a
                  href="https://github.com/creative-fonts/creative-fonts"
                  target="_blank"
                >
                  <img
                    src="https://img.icons8.com/color/48/000000/github--v3.png"
                    alt="github"
                  />
                </a>
                <DarkModeToggle
                  onChange={setDarkMode}
                  checked={darkMode}
                  size={70}
                  id="toggle-sm"
                />
              </div>
            </div>
            <Routes>
              <Route path="/preview/*" element={<Preview />} />
              <Route path="/about" element={<About />} />
              <Route path="/*" element={<Main />} />
              <Route path="/preview/:fontId" element={<Preview />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
