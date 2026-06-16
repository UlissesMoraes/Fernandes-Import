"use client";

import { motion } from "framer-motion";

const items = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L4 7.5V14c0 5.5 4.4 10.6 10 12 5.6-1.4 10-6.5 10-12V7.5L14 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9.5 14.5l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Especialistas Apple Certificados",
    description: "Equipe treinada com profundo conhecimento no ecossistema Apple.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="12" width="20" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 12V9a6 6 0 1112 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="18" r="2" fill="currentColor" />
      </svg>
    ),
    title: "Garantia em Todos os Produtos",
    description: "Garantia estendida em produtos novos e seminovos com suporte real.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 24c0-5 4-8 9-8s9 3 9 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Atendimento Premium Personalizado",
    description: "Cada cliente recebe consultoria individualizada para a melhor escolha.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="6" width="22" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 11h22M3 17h22" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
      </svg>
    ),
    title: "Equipamentos Certificados",
    description: "Ferramentas e equipamentos de padrão profissional para cada reparo.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 14h18M19 9l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 6v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4" />
      </svg>
    ),
    title: "Entrega Rápida para SC",
    description: "Enviamos para todo Santa Catarina com segurança e agilidade.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 4h16a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 9h20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 4v5M19 4v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 15h6M9 19h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Suporte Pós-Venda Dedicado",
    description: "Continuamos ao seu lado depois da compra. Sempre disponíveis.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.7, ease: "easeOut" as const },
  }),
};

export default function Diferenciais() {
  return (
    <section
      style={{
        background: "#000",
        padding: "120px 24px",
        borderTop: "1px solid #2D2D2F",
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
            Nossos Diferenciais
          </p>
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: "#fff",
              lineHeight: 1.1,
            }}
          >
            Por que escolher a gente.
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              style={{
                border: "1px solid #2D2D2F",
                borderRadius: 24,
                padding: "36px 32px",
                transition: "border-color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "#0071E3")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "#2D2D2F")
              }
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "rgba(0,113,227,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0071E3",
                  marginBottom: 24,
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontSize: 19,
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "#fff",
                  marginBottom: 10,
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: "#86868B",
                  lineHeight: 1.6,
                }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
