"use client";

import { motion } from "framer-motion";

const MAPS_LINK =
  "https://www.google.com/maps/search/Riviera+Concept+Praia+Brava+Itajaí";

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
                  Riviera Concept
                </p>
                <p style={{ fontSize: 15, color: "#86868B", lineHeight: 1.5 }}>
                  Praia Brava, Itajaí — SC
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
                  Segunda a Sexta: 9h às 18h<br />
                  Sábado: 9h às 13h
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
                  (47) 99999-9999
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

        {/* Right — Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" as const }}
          style={{
            height: 440,
            borderRadius: 28,
            background: "#0D0D0D",
            border: "1px solid #2D2D2F",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Map grid lines */}
          <svg
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.15 }}
            viewBox="0 0 400 440"
            preserveAspectRatio="xMidYMid slice"
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 44} x2="400" y2={i * 44} stroke="#fff" strokeWidth="0.5" />
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <line key={`v${i}`} x1={i * 44} y1="0" x2={i * 44} y2="440" stroke="#fff" strokeWidth="0.5" />
            ))}
          </svg>

          {/* Streets */}
          <svg
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.3 }}
            viewBox="0 0 400 440"
            preserveAspectRatio="xMidYMid slice"
          >
            <path d="M0 180 Q100 160 200 200 Q300 240 400 220" stroke="#2D2D2F" strokeWidth="12" fill="none" />
            <path d="M150 0 Q170 100 180 200 Q190 320 195 440" stroke="#2D2D2F" strokeWidth="8" fill="none" />
            <path d="M0 300 Q120 280 200 290 Q300 300 400 280" stroke="#2D2D2F" strokeWidth="6" fill="none" />
            <path d="M250 0 Q260 150 270 300 Q275 380 280 440" stroke="#2D2D2F" strokeWidth="5" fill="none" />
          </svg>

          {/* Location pin */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -60%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              style={{
                width: 48,
                height: 48,
                borderRadius: "50% 50% 50% 0",
                background: "#0071E3",
                transform: "rotate(-45deg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 32px rgba(0,113,227,0.4)",
              }}
            >
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: "#fff",
                  transform: "rotate(45deg)",
                }}
              />
            </motion.div>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "rgba(0,113,227,0.3)",
                filter: "blur(4px)",
                marginTop: 4,
              }}
            />
          </div>

          {/* Label */}
          <div
            style={{
              position: "absolute",
              bottom: 24,
              left: 24,
              right: 24,
              padding: "16px 20px",
              background: "rgba(22,22,23,0.95)",
              backdropFilter: "blur(20px)",
              borderRadius: 16,
              border: "1px solid #2D2D2F",
            }}
          >
            <p style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 2, letterSpacing: "-0.02em" }}>
              Fernandes Import
            </p>
            <p style={{ fontSize: 13, color: "#86868B" }}>
              Riviera Concept · Praia Brava, Itajaí
            </p>
          </div>
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
