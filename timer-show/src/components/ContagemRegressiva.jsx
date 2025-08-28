import React, { useEffect, useState } from "react";
import "./ContagemRegressiva.css";

const ContagemRegressiva = () => {
  const [tempoRestante, setTempoRestante] = useState("");

  useEffect(() => {
    const dataEvento = new Date("2026-02-20T20:00:00");

    const atualizarTempo = () => {
      const agora = new Date();
      let diferenca = dataEvento - agora;

      if (diferenca <= 0) {
        setTempoRestante("🎉 O show começou!");
        clearInterval(intervalo);
        return;
      }

      // Calcular meses e dias restantes
      let anos = dataEvento.getFullYear() - agora.getFullYear();
      let meses = dataEvento.getMonth() - agora.getMonth() + anos * 12;
      let dias = dataEvento.getDate() - agora.getDate();

      if (dias < 0) {
        meses -= 1;
        const ultimoDiaMesAnterior = new Date(
          dataEvento.getFullYear(),
          dataEvento.getMonth(),
          0
        ).getDate();
        dias += ultimoDiaMesAnterior;
      }

      const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diferenca / 1000 / 60) % 60);
      const segundos = Math.floor((diferenca / 1000) % 60);

      setTempoRestante(
        `${meses}m ${dias}d ${horas}h ${minutos}m ${segundos}s`
      );
    };

    const intervalo = setInterval(atualizarTempo, 1000);
    atualizarTempo();

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="timer-container">
      <h2>⏳ Contagem Regressiva para o Show</h2>
      <div className="contador">{tempoRestante}</div>
    </div>
  );
};

export default ContagemRegressiva;
