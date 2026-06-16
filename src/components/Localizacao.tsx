"use client";

import { motion } from "framer-motion";

const MAPS_LINK =
  "https://www.google.com/maps/search/Fernandes+Import+Av.+Osvaldo+Reis+3385+Praia+Brava+Itajaí+SC";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function Localizacao() {
  return (
    <section
      id="localizacao"
      style={{
        background: "#000",
        padding: "120px 24px",
        borderTop: "1px solid #2D2D2F",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
        className="localizacao-grid"
      >
        {/* Left — Info */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#0071E3",
              marginBottom: 16,
            }}
          >
            Onde Estamos
          </p>
          <h2
            style={{
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: 36,
            }}
          >
            Venha nos visitar.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 40 }}>
            <div style={{ display: "flex", gap: 16 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: "rgba(0,113,227,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0071E3",
                  flexShrink: 0,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 1C6.24 1 4 3.24 4 6c0 4.25 5 11 5 11s5-6.75 5-11c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <circle cx="9" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <div>
                <p style={{ fontSize: 16, fontWeight: 600, color: "#fff", marginBottom: 4, letterSpacing: "-0.02em" }}>
                  Riviera Concept — Sala 509
                </p>
                <p style={{ fontSize: 15, color: "#86868B", lineHeight: 1.5 }}>
                  Av. Osvaldo Reis, 3385<br />
                  Praia Brava, Itajaí — SC, 88306-773
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: 16 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: "rgba(0,113,227,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0071E3",
                  flexShrink: 0,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M9 5v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p style={{ fontSize: 16, fontWeight: 600, color: "#fff", marginBottom: 4, letterSpacing: "-0.02em" }}>
                  Horário de Funcionamento
                </p>
                <p style={{ fontSize: 15, color: "#86868B", lineHeight: 1.7 }}>
                  Segunda a Sábado: 9h às 19h
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: 16 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: "rgba(0,113,227,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0071E3",
                  flexShrink: 0,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 4h4l1.5 3.5-2 1.5c1 2 2.5 3.5 4.5 4.5l1.5-2L16 13v4c-7.5 0-13-6-13-13z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p style={{ fontSize: 16, fontWeight: 600, color: "#fff", marginBottom: 4, letterSpacing: "-0.02em" }}>
                  Telefone / WhatsApp
                </p>
                <p style={{ fontSize: 15, color: "#86868B" }}>
                  (47) 99944-9554
                </p>
              </div>
            </div>
          </div>

          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 28px",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#fff",
              borderRadius: 980,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "-0.01em",
              transition: "border-color 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.7)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1C5.79 1 4 2.79 4 5c0 3.75 4 9 4 9s4-5.25 4-9c0-2.21-1.79-4-4-4z" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="8" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            Como Chegar
          </a>
        </motion.div>

        {/* Right — Google Maps */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" as const }}
          style={{
            height: 440,
            borderRadius: 28,
            border: "1px solid #2D2D2F",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <iframe
            src="https://maps.google.com/maps?q=Av.+Osvaldo+Reis,+3385,+Praia+Brava,+Itajaí,+SC,+88306-773&output=embed&hl=pt-BR&z=16"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Fernandes Import"
          />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .localizacao-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
