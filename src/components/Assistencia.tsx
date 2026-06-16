"use client";

import { motion } from "framer-motion";

const WA_LINK =
  "https://wa.me/5547999999999?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20assist%C3%AAncia%20t%C3%A9cnica.";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="2" width="20" height="24" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <rect x="7" y="5" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="14" cy="23" r="1" fill="currentColor" />
      </svg>
    ),
    title: "Troca de Tela",
    description: "Substituição de displays originais com garantia de qualidade e cor perfeita.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="6" y="10" width="16" height="10" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 13h-2a1 1 0 000 2h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 7v3M14 7v3M18 7v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="15" r="1" fill="currentColor" />
        <circle cx="14" cy="15" r="1" fill="currentColor" />
        <circle cx="18" cy="15" r="1" fill="currentColor" />
      </svg>
    ),
    title: "Troca de Bateria",
    description: "Baterias certificadas com até 100% de capacidade original restaurada.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 10v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 5l2 2M23 5l-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Diagnóstico Gratuito",
    description: "Avaliação completa do dispositivo sem custo para identificar o problema.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4L5 8v6c0 5 4 9 9 10 5-1 9-5 9-10V8L14 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 14l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Atualização de Software",
    description: "Atualização segura do iOS, iPadOS e macOS com backup completo.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="6" width="22" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 12h2M13 12h6M9 15h4M17 15h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="6" cy="9" r="1" fill="currentColor" />
      </svg>
    ),
    title: "Reparo de Placa",
    description: "Microssoldagem e diagnóstico avançado de placa-mãe por especialistas.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4a10 10 0 100 20A10 10 0 0014 4z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 14s1 2 3 2 3-2 3-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 11h.01M18 11h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 20l-2 4M18 20l2 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Recuperação de Dados",
    description: "Recuperação de fotos, contatos e arquivos de dispositivos danificados.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: "easeOut" as const },
  }),
};

export default function Assistencia() {
  return (
    <section
      id="assistencia"
      style={{
        background: "#0D0D0D",
        padding: "120px 24px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          style={{ textAlign: "center", marginBottom: 80 }}
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
            Assistência Técnica
          </p>
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Seu Apple em mãos especializadas.
          </h2>
          <p
            style={{
              fontSize: 19,
              fontWeight: 400,
              color: "#86868B",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Técnicos certificados com equipamentos de última geração para cuidar
            do seu dispositivo.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 24,
            marginBottom: 56,
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3 }}
              style={{
                background: "#161617",
                border: "1px solid #2D2D2F",
                borderRadius: 20,
                padding: "32px",
                cursor: "default",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "rgba(0,113,227,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0071E3",
                  marginBottom: 20,
                }}
              >
                {service.icon}
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "#fff",
                  marginBottom: 10,
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: "#86868B",
                  lineHeight: 1.6,
                }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          style={{ textAlign: "center" }}
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "18px 40px",
              background: "#25D366",
              color: "#fff",
              borderRadius: 980,
              fontSize: 17,
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "-0.02em",
              transition: "opacity 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.9";
              (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Solicitar Orçamento
          </a>
        </motion.div>
      </div>
    </section>
  );
}
