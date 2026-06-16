"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { motion } from "framer-motion";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const INSTAGRAM_URL = "https://www.instagram.com/fernandesimport/";

const posts = [
  "https://www.instagram.com/p/DW_XEEJAJK0/",
  "https://www.instagram.com/p/DDc7tRev60T/",
  "https://www.instagram.com/p/DCor3i4xR2T/",
  "https://www.instagram.com/p/DB5GaELxGJW/",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function Instagram() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      setLoaded(true);
    }
  }, []);

  const handleScriptLoad = () => {
    window.instgrm?.Embeds.process();
    setLoaded(true);
  };

  return (
    <section
      style={{
        background: "#000",
        padding: "120px 24px",
        borderTop: "1px solid #2D2D2F",
      }}
    >
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 24,
              padding: "8px 18px",
              background: "linear-gradient(135deg, rgba(131,58,180,0.15) 0%, rgba(253,29,29,0.15) 100%)",
              border: "1px solid rgba(253,29,29,0.2)",
              borderRadius: 980,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="url(#ig-grad2)">
              <defs>
                <linearGradient id="ig-grad2" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f09433" />
                  <stop offset="50%" stopColor="#dc2743" />
                  <stop offset="100%" stopColor="#bc1888" />
                </linearGradient>
              </defs>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#dc2743" }}>@fernandesimport</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(32px, 4.5vw, 56px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Siga nosso Instagram
          </h2>
          <p style={{ fontSize: 18, color: "#86868B", maxWidth: 440, margin: "0 auto" }}>
            Lançamentos, unboxings e ofertas exclusivas em tempo real.
          </p>
        </motion.div>

        {/* Posts grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
            marginBottom: 48,
          }}
          className="ig-embed-grid"
        >
          {posts.map((url, i) => (
            <motion.div
              key={url}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{
                borderRadius: 24,
                overflow: "hidden",
                border: "1px solid #2D2D2F",
                background: "#161617",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                position: "relative",
              }}
            >
              {/* Skeleton while loading */}
              {!loaded && (
                <div
                  style={{
                    height: 480,
                    background: "linear-gradient(90deg, #1C1C1E 25%, #2C2C2E 50%, #1C1C1E 75%)",
                    backgroundSize: "200% 100%",
                    animation: "skeleton-shimmer 1.5s infinite",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="#3A3A3C" strokeWidth="1.5" />
                    <circle cx="12" cy="10" r="3" stroke="#3A3A3C" strokeWidth="1.5" />
                    <path d="M2 17l4-4 3 3 4-5 5 6" stroke="#3A3A3C" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </div>
              )}

              {/* Instagram embed */}
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                data-instgrm-captioned
                style={{
                  background: "#fff",
                  border: 0,
                  borderRadius: 0,
                  boxShadow: "none",
                  margin: 0,
                  maxWidth: "100%",
                  minWidth: 0,
                  padding: 0,
                  width: "100%",
                  display: loaded ? "block" : "none",
                }}
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#0071E3", fontSize: 14, padding: 16, display: "block" }}
                >
                  Ver post no Instagram
                </a>
              </blockquote>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{ textAlign: "center" }}
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "16px 36px",
              background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
              color: "#fff",
              borderRadius: 980,
              fontSize: 16,
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "-0.02em",
              boxShadow: "0 8px 32px rgba(253,29,29,0.25)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(253,29,29,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(253,29,29,0.25)";
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Seguir @fernandesimport
          </a>
        </motion.div>
      </div>

      <style>{`
        @keyframes skeleton-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @media (max-width: 767px) {
          .ig-embed-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
