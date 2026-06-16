"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const WA_LINK =
  "https://wa.me/5547999449554?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20tenho%20interesse%20em%20um%20produto.";

type Category = "iPhone" | "MacBook" | "iPad" | "AirPods" | "Apple Watch";

interface PhotoProduct {
  type: "photo";
  name: string;
  description: string;
  image: string;
  badge?: string;
}

interface VideoProduct {
  type: "video";
  name: string;
  description: string;
  video: string;
  badge?: string;
}

type Product = PhotoProduct | VideoProduct;

const products: Record<Category, Product[]> = {
  iPhone: [
    {
      type: "photo",
      name: "iPhone 16 Pro",
      description: "Chip A18 Pro. Câmera de 48MP com zoom 5x. Titânio.",
      image: "/produtos/iphone/ip16-68f8ee3a79c7f-1400x1400.webp",
      badge: "Novo",
    },
    {
      type: "video",
      name: "iPhone 17 Pro Max",
      description: "O lançamento mais aguardado do ano. Disponível agora.",
      video: "/produtos/iphone/video-iphone17-pro-max.mp4",
      badge: "Lançamento",
    },
    {
      type: "video",
      name: "Unboxing Exclusivo",
      description: "Veja a experiência completa de unboxing de um novo iPhone.",
      video: "/produtos/iphone/video-unboxing-sonho.mp4",
    },
    {
      type: "video",
      name: "Promoção Especial",
      description: "Compre um iPhone da linha 17 e ganhe óculos de brinde.",
      video: "/produtos/iphone/video-oferta-namorados.mp4",
      badge: "Oferta",
    },
  ],
  MacBook: [
    {
      type: "photo",
      name: "MacBook Air M4",
      description: "Chip M4. Ultra-fino. Cores exclusivas. Até 18h de bateria.",
      image: "/produtos/macbook/macbook-neo-color-unselect-202603-gallery-1_FMT_WHH.jpg",
      badge: "Novo",
    },
  ],
  iPad: [
    {
      type: "photo",
      name: "iPad mini",
      description: "Compacto e poderoso. Chip A17 Pro. Design atemporal.",
      image: "/produtos/ipad/ipad-mini-finish-unselect-gallery-1-202410_FMT_WHH.jpg",
    },
  ],
  AirPods: [
    {
      type: "photo",
      name: "AirPods 4",
      description: "Novo design aberto. Qualidade de som extraordinária.",
      image: "/produtos/airpods/airpods-4-down-compare-202409_FMT_WHH.jpg",
      badge: "Best-seller",
    },
  ],
  "Apple Watch": [
    {
      type: "photo",
      name: "Apple Watch Series 10",
      description: "O mais fino Apple Watch. Tela maior. Chip S10.",
      image: "/produtos/apple-watch/watch_og_339223162.png",
      badge: "Novo",
    },
  ],
};

const categories: Category[] = ["iPhone", "MacBook", "iPad", "AirPods", "Apple Watch"];

function VideoCard({ product }: { product: VideoProduct }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const handleMouseEnter = () => {
    videoRef.current?.play();
    setPlaying(true);
  };
  const handleMouseLeave = () => {
    videoRef.current?.pause();
    setPlaying(false);
  };
  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" as const }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        background: "#161617",
        border: "1px solid #2D2D2F",
        borderRadius: 28,
        overflow: "hidden",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* Video area */}
      <div style={{ height: 320, position: "relative", overflow: "hidden", background: "#000" }}>
        {product.badge && (
          <div
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              padding: "4px 12px",
              background: product.badge === "Lançamento" ? "#FF3B30" : "#0071E3",
              color: "#fff",
              borderRadius: 980,
              fontSize: 12,
              fontWeight: 600,
              zIndex: 3,
            }}
          >
            {product.badge}
          </div>
        )}

        <video
          ref={videoRef}
          src={product.video}
          muted
          playsInline
          loop
          preload="metadata"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        {/* Play indicator */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: playing ? 0 : 1,
            transition: "opacity 0.3s ease",
            pointerEvents: "none",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
            <path d="M6 4l12 6-12 6V4z" />
          </svg>
        </div>

        {/* Mute toggle */}
        {playing && (
          <button
            onClick={toggleMute}
            style={{
              position: "absolute",
              bottom: 16,
              right: 16,
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 3,
            }}
            aria-label={muted ? "Ativar som" : "Silenciar"}
          >
            {muted ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            )}
          </button>
        )}

        {/* Video label */}
        <div style={{ position: "absolute", bottom: 16, left: 16, zIndex: 2 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white" style={{ opacity: 0.7 }}>
            <path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", marginBottom: 8 }}>
          {product.name}
        </h3>
        <p style={{ fontSize: 15, color: "#86868B", lineHeight: 1.5, marginBottom: 20, flex: 1 }}>
          {product.description}
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            justifyContent: "center",
            padding: "12px 24px",
            background: "#0071E3",
            color: "#fff",
            borderRadius: 980,
            fontSize: 15,
            fontWeight: 600,
            textDecoration: "none",
            letterSpacing: "-0.01em",
            transition: "background 0.2s ease",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#0077ED")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#0071E3")}
        >
          Ver Detalhes
        </a>
      </div>
    </motion.div>
  );
}

function PhotoCard({ product }: { product: PhotoProduct }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" as const }}
      style={{
        background: "#161617",
        border: "1px solid #2D2D2F",
        borderRadius: 28,
        overflow: "hidden",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: 260,
          position: "relative",
          background: "#161617",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {product.badge && (
          <div
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              padding: "4px 12px",
              background: "#0071E3",
              color: "#fff",
              borderRadius: 980,
              fontSize: 12,
              fontWeight: 600,
              zIndex: 2,
            }}
          >
            {product.badge}
          </div>
        )}

        {!imgError ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "contain", padding: 16 }}
            onError={() => setImgError(true)}
          />
        ) : (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, opacity: 0.4 }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="4" y="2" width="24" height="28" rx="5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="16" cy="27" r="1.5" fill="currentColor" />
            </svg>
            <span style={{ fontSize: 12, color: "inherit", fontWeight: 500 }}>Imagem indisponível</span>
          </div>
        )}
      </div>

      <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", marginBottom: 8 }}>
          {product.name}
        </h3>
        <p style={{ fontSize: 15, color: "#86868B", lineHeight: 1.5, marginBottom: 20, flex: 1 }}>
          {product.description}
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            justifyContent: "center",
            padding: "12px 24px",
            background: "#0071E3",
            color: "#fff",
            borderRadius: 980,
            fontSize: 15,
            fontWeight: 600,
            textDecoration: "none",
            letterSpacing: "-0.01em",
            transition: "background 0.2s ease",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#0077ED")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#0071E3")}
        >
          Ver Detalhes
        </a>
      </div>
    </motion.div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Produtos() {
  const [active, setActive] = useState<Category>("iPhone");

  return (
    <section
      id="produtos"
      style={{ background: "#0D0D0D", padding: "120px 24px", position: "relative", overflow: "hidden" }}
    >
      {/* AirPods background */}
      <AnimatePresence>
        {active === "AirPods" && (
          <motion.div
            key="airpods-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/produtos/airpods/fundo de tela.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 0,
            }}
          >
            <div style={{ position: "absolute", inset: 0, background: "rgba(13,13,13,0.82)" }} />
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#0071E3", marginBottom: 16 }}>
            Catálogo
          </p>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, letterSpacing: "-0.04em", color: "#fff", lineHeight: 1.1 }}>
            Nossos Produtos
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 56 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: "10px 20px",
                borderRadius: 980,
                border: "1px solid",
                borderColor: active === cat ? "#0071E3" : "#2D2D2F",
                background: active === cat ? "#0071E3" : "transparent",
                color: active === cat ? "#fff" : "#86868B",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                letterSpacing: "-0.01em",
                transition: "all 0.2s ease",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" as const }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {products[active].map((product) =>
              product.type === "video" ? (
                <VideoCard key={product.name} product={product} />
              ) : (
                <PhotoCard key={product.name} product={product} />
              )
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
