import React from "react";
import "./App.css";
import banner from "./assets/banner.png";

function App() {
  return (
    <>
      <div className="app">
        <header className="header">
          <div className="logo">TimerShow</div>
          <div className="nav"></div>
        </header>

        <main className="banner-container">
          <img src={banner} alt="ChiShow Festival 2025" className="banner" />
          <div className="banner-content">
            <button className="buy-button">LOCALIZAR</button>
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

export default App;
