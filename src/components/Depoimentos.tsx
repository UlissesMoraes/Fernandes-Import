"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    text: "Comprei meu iPhone 16 Pro aqui e foi a melhor experiência de compra que já tive. Atendimento impecável, produto perfeito e entrega no prazo prometido.",
    author: "Rafael M.",
    location: "Itajaí, SC",
    rating: 5,
  },
  {
    text: "Trouxe meu MacBook Pro para assistência e em 24h estava pronto. Profissionalismo incomparável e preço justo. Definitivamente minha referência para tudo Apple.",
    author: "Camila S.",
    location: "Balneário Camboriú, SC",
    rating: 5,
  },
  {
    text: "A loja mais bem estruturada para produtos Apple que já conheci na região. Atendimento personalizado, sem pressão. Recomendo sem hesitar para qualquer pessoa.",
    author: "Lucas P.",
    location: "Florianópolis, SC",
    rating: 5,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: "easeOut" as const },
  }),
};

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#FF9F0A">
          <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7L8 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Depoimentos() {
  return (
    <section
      style={{
        background: "#F5F5F7",
        padding: "120px 24px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          {/* Google Rating Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 20px",
              background: "#fff",
              borderRadius: 980,
              border: "1px solid rgba(0,0,0,0.1)",
              marginBottom: 32,
              boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#000", letterSpacing: "-0.02em" }}>
              4.7
            </span>
            <div style={{ display: "flex", gap: 2 }}>
              {[1, 2, 3, 4].map((i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 16 16" fill="#FF9F0A">
                  <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7L8 1z" />
                </svg>
              ))}
              <svg width="14" height="14" viewBox="0 0 16 16">
                <defs>
                  <linearGradient id="half">
                    <stop offset="70%" stopColor="#FF9F0A" />
                    <stop offset="70%" stopColor="#E0E0E0" />
                  </linearGradient>
                </defs>
                <path fill="url(#half)" d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7L8 1z" />
              </svg>
            </div>
            <span style={{ fontSize: 13, color: "#86868B" }}>no Google</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: "#000",
              lineHeight: 1.1,
            }}
          >
            O que nossos clientes dizem.
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {reviews.map((review, i) => (
            <motion.div
              key={review.author}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              style={{
                background: "#fff",
                borderRadius: 20,
                padding: "32px",
                boxShadow: "0 4px 32px rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <Stars count={review.rating} />
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.65,
                  color: "#1C1C1E",
                  marginBottom: 24,
                  fontStyle: "normal",
                }}
              >
                &ldquo;{review.text}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #0071E3, #5AC8FA)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: 700,
                  }}
                >
                  {review.author[0]}
                </div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 700, color: "#000", letterSpacing: "-0.02em" }}>
                    {review.author}
                  </p>
                  <p style={{ fontSize: 13, color: "#86868B" }}>{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
