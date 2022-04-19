import "./App.css";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Preview from "./components/Preview/Preview";
import "@creative-fonts/edge-of-the-galaxy";
import logo from "./images/cf.png";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <div className="app">
            <div className="navbar">
              <div className="logo">
                <img src={logo} alt="" />
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
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.icons8.com/color/48/000000/github--v3.png"
                    alt="github"
                  />
                </a>
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
