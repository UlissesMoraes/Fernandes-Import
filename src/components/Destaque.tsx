"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function Destaque() {
  return (
    <section
      style={{
        background: "#F5F5F7",
        padding: "120px 24px",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{ textAlign: "center", marginBottom: 80 }}
        >
          <p
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#0071E3",
              marginBottom: 20,
            }}
          >
            Por que Fernandes Import
          </p>
          <h2
            style={{
              fontSize: "clamp(40px, 6vw, 80px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: "#000",
              lineHeight: 1.05,
              marginBottom: 28,
            }}
          >
            Curadoria de tecnologia.
          </h2>
          <p
            style={{
              fontSize: 20,
              fontWeight: 400,
              lineHeight: 1.6,
              color: "#3C3C3E",
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            Selecionamos apenas os melhores dispositivos Apple para nossos
            clientes. Cada produto passa por nossa rigorosa análise de qualidade
            antes de chegar até você.
          </p>
        </motion.div>

        {/* Device strip */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" as const }}
          style={{
            background: "#000",
            borderRadius: 32,
            padding: "60px 48px",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: 40,
            flexWrap: "wrap",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Ambient glow */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,113,227,0.15) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* iPhone */}
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            style={{
              width: 110,
              height: 220,
              borderRadius: 22,
              background: "linear-gradient(160deg, #2C2C2E 0%, #1C1C1E 100%)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          />

          {/* MacBook */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
                delay: 0.5,
              }}
              style={{
                width: 260,
                height: 165,
                borderRadius: "14px 14px 4px 4px",
                background: "linear-gradient(160deg, #3A3A3C 0%, #2C2C2E 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "40%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 20,
                  height: 20,
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "50%",
                }}
              />
            </motion.div>
            <div
              style={{
                width: 310,
                height: 8,
                borderRadius: "0 0 8px 8px",
                background: "linear-gradient(160deg, #3A3A3C 0%, #2C2C2E 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            />
          </div>

          {/* iPad */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{
              repeat: Infinity,
              duration: 3.8,
              ease: "easeInOut",
              delay: 1,
            }}
            style={{
              width: 140,
              height: 190,
              borderRadius: 18,
              background: "linear-gradient(160deg, #3A3A3C 0%, #1C1C1E 100%)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          />

          {/* AirPods */}
          <motion.div
            animate={{ y: [-6, 4, -6] }}
            transition={{
              repeat: Infinity,
              duration: 3.2,
              ease: "easeInOut",
              delay: 0.3,
            }}
            style={{
              width: 90,
              height: 100,
              borderRadius: 18,
              background: "linear-gradient(160deg, #F0F0F5 0%, #D8D8DC 100%)",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
