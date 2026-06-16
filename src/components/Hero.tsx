"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const WA_LINK =
  "https://wa.me/5547999999999?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais.";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.8, ease: "easeOut" as const },
  }),
};

function IPhoneCSS() {
  return (
    <div style={{ position: "relative" }}>
      {/* iPhone body */}
      <div
        style={{
          width: 240,
          height: 490,
          borderRadius: 44,
          background: "linear-gradient(160deg, #1C1C1E 0%, #000 60%)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow:
            "0 40px 120px rgba(0,113,227,0.25), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.1)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            right: 12,
            bottom: 12,
            borderRadius: 34,
            background: "linear-gradient(160deg, #0A0A0F 0%, #050508 100%)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 14,
              left: "50%",
              transform: "translateX(-50%)",
              width: 88,
              height: 30,
              background: "#000",
              borderRadius: 20,
              zIndex: 2,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(0,113,227,0.15) 0%, transparent 70%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 60,
              left: 24,
              right: 24,
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 16,
            }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: `rgba(255,255,255,${0.04 + (i % 3) * 0.02})`,
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              />
            ))}
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 16,
              left: 16,
              right: 16,
              height: 50,
              borderRadius: 16,
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          />
        </div>
        {[
          { top: 100, height: 36 },
          { top: 152, height: 56 },
          { top: 220, height: 56 },
        ].map((btn, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: -3,
              top: btn.top,
              width: 4,
              height: btn.height,
              background: "#2C2C2E",
              borderRadius: "2px 0 0 2px",
            }}
          />
        ))}
        <div
          style={{
            position: "absolute",
            right: -3,
            top: 180,
            width: 4,
            height: 80,
            background: "#2C2C2E",
            borderRadius: "0 2px 2px 0",
          }}
        />
      </div>
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          bottom: -40,
          left: "50%",
          transform: "translateX(-50%)",
          width: 200,
          height: 60,
          background: "rgba(0,113,227,0.3)",
          borderRadius: "50%",
          filter: "blur(30px)",
        }}
      />
    </div>
  );
}

function IPhoneSVG() {
  const [failed, setFailed] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      {/* CSS fallback — mostrado enquanto PNG carrega ou se falhar */}
      <div style={{ opacity: visible && !failed ? 0 : 1, transition: "opacity 0.4s ease", position: visible && !failed ? "absolute" : "relative" }}>
        <IPhoneCSS />
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      {!failed && (
        <img
          src="/hero-iphone.png"
          alt="iPhone 3D"
          loading="eager"
          onLoad={() => setVisible(true)}
          onError={() => setFailed(true)}
          style={{
            maxHeight: 540,
            width: "auto",
            position: visible ? "relative" : "absolute",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.4s ease",
            filter:
              "drop-shadow(0 40px 80px rgba(0,113,227,0.35)) drop-shadow(0 0 1px rgba(255,255,255,0.1))",
          }}
        />
      )}

      {/* Glow sob a imagem PNG */}
      {visible && !failed && (
        <div
          style={{
            position: "absolute",
            bottom: -24,
            left: "50%",
            transform: "translateX(-50%)",
            width: "60%",
            height: 48,
            background: "rgba(0,113,227,0.35)",
            borderRadius: "50%",
            filter: "blur(28px)",
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#000",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background ambient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(0,113,227,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "120px 24px 80px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: 64,
        }}
        className="hero-grid"
      >
        {/* Left — Text */}
        <div>
          <motion.p
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#0071E3",
              marginBottom: 24,
            }}
          >
            Praia Brava · Itajaí
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            style={{
              fontSize: "clamp(48px, 6vw, 88px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "#fff",
              marginBottom: 28,
              maxWidth: 560,
            }}
          >
            A experiência Apple do jeito que deveria ser.
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            style={{
              fontSize: 20,
              fontWeight: 400,
              lineHeight: 1.55,
              color: "#86868B",
              marginBottom: 48,
              maxWidth: 440,
            }}
          >
            Venda de produtos Apple premium e assistência especializada em
            Itajaí.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
          >
            <a
              href="#produtos"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "16px 32px",
                background: "#0071E3",
                color: "#fff",
                borderRadius: 980,
                fontSize: 16,
                fontWeight: 600,
                textDecoration: "none",
                letterSpacing: "-0.02em",
                transition: "background 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#0077ED";
                (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#0071E3";
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              }}
            >
              Ver Produtos
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "16px 32px",
                background: "transparent",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: 980,
                fontSize: 16,
                fontWeight: 600,
                textDecoration: "none",
                letterSpacing: "-0.02em",
                transition: "border-color 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.7)";
                (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.3)";
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              }}
            >
              Falar no WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Right — iPhone (SVG real ou fallback CSS) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" as const }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="hero-phone-wrapper"
        >
          <motion.div
            animate={{ y: [-14, 14, -14] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <IPhoneSVG />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            style={{ color: "#86868B" }}
          >
            <path
              d="M10 3v14M10 17l-5-5M10 17l5-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 767px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding-top: 100px !important;
            gap: 48px !important;
          }
          .hero-phone-wrapper {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
