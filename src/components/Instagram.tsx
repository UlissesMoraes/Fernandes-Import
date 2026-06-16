"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const INSTAGRAM_URL = "https://www.instagram.com/fernandesimport/";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

type PostMedia =
  | { type: "video"; src: string; delay: number }
  | { type: "image"; src: string; delay: number };

const posts: PostMedia[] = [
  { type: "video", src: "/produtos/iphone/video-iphone17-pro-max.mp4", delay: 0 },
  { type: "video", src: "/produtos/iphone/video-unboxing-sonho.mp4", delay: 0.08 },
  { type: "image", src: "/produtos/airpods/airpods-4-down-compare-202409_FMT_WHH.jpg", delay: 0.16 },
  { type: "video", src: "/produtos/iphone/video-oferta-namorados.mp4", delay: 0.24 },
  { type: "image", src: "/produtos/iphone/ip16-68f8ee3a79c7f-1400x1400.webp", delay: 0.32 },
  { type: "image", src: "/produtos/macbook/macbook-neo-color-unselect-202603-gallery-1_FMT_WHH.jpg", delay: 0.40 },
];

function VideoPost({ src, delay }: { src: string; delay: number }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      style={{ display: "block", aspectRatio: "1", position: "relative", overflow: "hidden", cursor: "pointer" }}
      onMouseEnter={() => { setHovered(true); ref.current?.play(); }}
      onMouseLeave={() => { setHovered(false); ref.current?.pause(); }}
    >
      <video
        ref={ref}
        src={src}
        muted
        playsInline
        loop
        preload="metadata"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      {/* dark overlay on hover */}
      <div style={{
        position: "absolute", inset: 0,
        background: hovered ? "rgba(0,0,0,0.45)" : "rgba(0,0,0,0.15)",
        transition: "background 0.25s ease",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {/* Reel icon always visible */}
        <div style={{
          position: "absolute", top: 10, right: 10,
          opacity: 0.9,
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M2 6a2 2 0 012-2h.5l2 4H2V6zm3.5-2H10l2 4H7.5L5.5 4zm6 0H16l2 4h-4.5L11.5 4zM18 4h.5a2 2 0 012 2v2h-4.5L18 4zM2 10h20v10a2 2 0 01-2 2H4a2 2 0 01-2-2V10zm10 2.5l-4 2.5 4 2.5 4-2.5-4-2.5z" />
          </svg>
        </div>
        {hovered && (
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
      </div>
    </motion.a>
  );
}

function ImagePost({ src, delay }: { src: string; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      style={{ display: "block", aspectRatio: "1", position: "relative", overflow: "hidden", cursor: "pointer" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={src}
        alt="Post Fernandes Import"
        fill
        unoptimized
        sizes="(max-width: 768px) 50vw, 33vw"
        style={{ objectFit: "cover", transition: "transform 0.4s ease", transform: hovered ? "scale(1.06)" : "scale(1)" }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: hovered ? "rgba(0,0,0,0.45)" : "rgba(0,0,0,0.05)",
        transition: "background 0.25s ease",
        display: "flex", alignItems: "center", justifyContent: "center", gap: 20,
      }}>
        {hovered && (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#fff", fontWeight: 700, fontSize: 15 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#fff", fontWeight: 700, fontSize: 15 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            </div>
          </>
        )}
      </div>
    </motion.a>
  );
}

export default function Instagram() {
  return (
    <section
      style={{
        background: "#000",
        padding: "120px 24px",
        borderTop: "1px solid #2D2D2F",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{ textAlign: "center", marginBottom: 56 }}
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
            <svg width="16" height="16" viewBox="0 0 24 24" fill="url(#ig-grad)">
              <defs>
                <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f09433" />
                  <stop offset="50%" stopColor="#dc2743" />
                  <stop offset="100%" stopColor="#bc1888" />
                </linearGradient>
              </defs>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#dc2743" }}>@fernandesimport</span>
          </div>

          <h2 style={{ fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 700, letterSpacing: "-0.04em", color: "#fff", lineHeight: 1.1, marginBottom: 16 }}>
            Siga nosso Instagram
          </h2>
          <p style={{ fontSize: 18, color: "#86868B", maxWidth: 440, margin: "0 auto" }}>
            Lançamentos, unboxings e ofertas exclusivas em tempo real.
          </p>
        </motion.div>

        {/* Grid com conteúdo real */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 3,
            borderRadius: 20,
            overflow: "hidden",
            marginBottom: 48,
          }}
          className="ig-grid"
        >
          {posts.map((post, i) =>
            post.type === "video" ? (
              <VideoPost key={i} src={post.src} delay={post.delay} />
            ) : (
              <ImagePost key={i} src={post.src} delay={post.delay} />
            )
          )}
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
        @media (max-width: 767px) {
          .ig-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
