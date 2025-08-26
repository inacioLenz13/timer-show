import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import banner from "./assets/banner.png";
import Localizar from "./localizar";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="app">
        <header
          className="header"
          style={{
            padding: "20px",
            background: "linear-gradient(to right, #e29d1b, #fd8700)",
            color: "#fff",
          }}
        >
          <div className="logo">TimerShow</div>
          <div className="nav"></div>
        </header>

        <main className="banner-container">
          <img src={banner} alt="ChiShow Festival 2025" className="banner" />
          <div className="banner-content">
            <button
              className="buy-button"
              onClick={() => navigate("/localizar")}
            >
              LOCALIZAR
            </button>
          </div>
        </main>
      </div>

      <section className="video-section">
        <div className="video-container">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/Ok9nB8iCjko"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/localizar" element={<Localizar />} />
    </Routes>
  );
}

export default App;
