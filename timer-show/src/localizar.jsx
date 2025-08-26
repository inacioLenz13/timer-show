import React from "react";
import Header from "./components/Header"; // agora deve funcionar ✅

function Localizar() {
  const localLatitude = -23.5275;
  const localLongitude = -46.6782;
  const googleMapsLink = `https://www.google.com/maps/dir/?api=1&destination=${localLatitude},${localLongitude}`;

  return (
    <>
      <Header />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>🎤 Local do Show</h1>
        <p>O grande evento acontecerá no <b>Allianz Parque - São Paulo</b>.</p>
        <iframe
          title="Mapa do Show"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "12px" }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.081632463614!2d-46.68022462382724!3d-23.52752256031154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5762b7c9784d%3A0xb5c9e30b7e7f63b3!2sAllianz%20Parque!5e0!3m2!1spt-BR!2sbr!4v1693140985115!5m2!1spt-BR!2sbr"
        ></iframe>
        <br />
        <a
          href={googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 24px",
            backgroundColor: "#e9551bff",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          📍 Traçar rota até o evento
        </a>
      </div>
    </>
  );
}

export default Localizar;
