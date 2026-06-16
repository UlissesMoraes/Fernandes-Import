"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WA_LINK =
  "https://wa.me/5547999999999?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20tenho%20interesse%20em%20um%20produto.";

type Category = "iPhone" | "MacBook" | "iPad" | "AirPods" | "Apple Watch";

interface Product {
  name: string;
  description: string;
  price: string;
  gradient: string;
  badge?: string;
}

const products: Record<Category, Product[]> = {
  iPhone: [
    {
      name: "iPhone 16 Pro",
      description: "Chip A18 Pro. Câmera de 48MP com zoom 5x. Titânio.",
      price: "A partir de R$ 9.499",
      gradient: "linear-gradient(135deg, #1C1C1E 0%, #3A3A3C 100%)",
      badge: "Novo",
    },
    {
      name: "iPhone 16",
      description: "Chip A18. Câmera Fusão de 48MP. Controle de Câmera.",
      price: "A partir de R$ 7.299",
      gradient: "linear-gradient(135deg, #C0E8FF 0%, #9FBCFF 100%)",
    },
    {
      name: "iPhone 15 Pro",
      description: "Chip A17 Pro. Frame de titânio. USB-C 3.0.",
      price: "A partir de R$ 7.999",
      gradient: "linear-gradient(135deg, #D4A676 0%, #8B7355 100%)",
    },
    {
      name: "iPhone 15",
      description: "Chip A16 Bionic. Dynamic Island. USB-C.",
      price: "A partir de R$ 5.999",
      gradient: "linear-gradient(135deg, #FFD7C2 0%, #FFB8A2 100%)",
    },
  ],
  MacBook: [
    {
      name: 'MacBook Pro 14"',
      description: "Chip M4 Pro. Tela Liquid Retina XDR. Até 24h de bateria.",
      price: "A partir de R$ 19.999",
      gradient: "linear-gradient(135deg, #3A3A3C 0%, #1C1C1E 100%)",
      badge: "Novo",
    },
    {
      name: 'MacBook Pro 16"',
      description: "Chip M4 Max. Potência máxima para profissionais.",
      price: "A partir de R$ 28.999",
      gradient: "linear-gradient(135deg, #4A4A4C 0%, #2C2C2E 100%)",
    },
    {
      name: "MacBook Air M3",
      description: "Chip M3. Ultra-fino. Perfeito para o dia a dia.",
      price: "A partir de R$ 11.999",
      gradient: "linear-gradient(135deg, #E8D5B7 0%, #C4A882 100%)",
    },
  ],
  iPad: [
    {
      name: "iPad Pro M4",
      description: "O mais fino Apple de sempre. Tela Ultra Retina XDR.",
      price: "A partir de R$ 11.999",
      gradient: "linear-gradient(135deg, #1C1C1E 0%, #3A3A3C 100%)",
      badge: "Novo",
    },
    {
      name: "iPad Air M2",
      description: "Chip M2. Tela Liquid Retina. Compatível com Apple Pencil.",
      price: "A partir de R$ 7.499",
      gradient: "linear-gradient(135deg, #B8D4F5 0%, #93B8E8 100%)",
    },
    {
      name: "iPad mini",
      description: "Compacto e poderoso. Chip A17 Pro. Design atemporal.",
      price: "A partir de R$ 5.299",
      gradient: "linear-gradient(135deg, #D4C5E2 0%, #B8A4CF 100%)",
    },
  ],
  AirPods: [
    {
      name: "AirPods Pro 2",
      description: "Cancelamento de ruído ativo. Áudio Adaptativo. H2 chip.",
      price: "A partir de R$ 2.499",
      gradient: "linear-gradient(135deg, #F5F5F7 0%, #E0E0E5 100%)",
      badge: "Best-seller",
    },
    {
      name: "AirPods 4",
      description: "Novo design aberto. Qualidade de som extraordinária.",
      price: "A partir de R$ 1.499",
      gradient: "linear-gradient(135deg, #FFFFFF 0%, #F0F0F5 100%)",
    },
    {
      name: "AirPods Max",
      description: "Over-ear premium. Cancelamento de ruído de nível pro.",
      price: "A partir de R$ 4.999",
      gradient: "linear-gradient(135deg, #1C2D40 0%, #2D4A5F 100%)",
    },
  ],
  "Apple Watch": [
    {
      name: "Apple Watch Series 10",
      description: "O mais fino Apple Watch. Tela maior. Chip S10.",
      price: "A partir de R$ 4.499",
      gradient: "linear-gradient(135deg, #2C2C2E 0%, #1C1C1E 100%)",
      badge: "Novo",
    },
    {
      name: "Apple Watch Ultra 2",
      description: "Resistência extrema. Titanio. GPS de precisão dual.",
      price: "A partir de R$ 9.999",
      gradient: "linear-gradient(135deg, #D4A843 0%, #A07830 100%)",
    },
  ],
};

const categories: Category[] = ["iPhone", "MacBook", "iPad", "AirPods", "Apple Watch"];

function ProductCard({ product }: { product: Product }) {
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
      {/* Image area */}
      <div
        style={{
          height: 220,
          background: product.gradient,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
              letterSpacing: "-0.01em",
            }}
          >
            {product.badge}
          </div>
        )}
        {/* Product silhouette */}
        <div
          style={{
            width: 80,
            height: 140,
            borderRadius: 16,
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3
          style={{
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "#fff",
            marginBottom: 8,
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            fontSize: 15,
            color: "#86868B",
            lineHeight: 1.5,
            marginBottom: 16,
            flex: 1,
          }}
        >
          {product.description}
        </p>
        <p
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: "#fff",
            marginBottom: 20,
            letterSpacing: "-0.02em",
          }}
        >
          {product.price}
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
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.background = "#0077ED")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.background = "#0071E3")
          }
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
      style={{
        background: "#0D0D0D",
        padding: "120px 24px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{ textAlign: "center", marginBottom: 64 }}
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
            Catálogo
          </p>
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: "#fff",
              lineHeight: 1.1,
            }}
          >
            Nossos Produtos
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            justifyContent: "center",
            marginBottom: 56,
          }}
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
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {products[active].map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
