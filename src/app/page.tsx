import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Produtos from "@/components/Produtos";
import Destaque from "@/components/Destaque";
import Assistencia from "@/components/Assistencia";
import Diferenciais from "@/components/Diferenciais";
import Depoimentos from "@/components/Depoimentos";
import Localizacao from "@/components/Localizacao";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Produtos />
        <Destaque />
        <Assistencia />
        <Diferenciais />
        <Depoimentos />
        <Localizacao />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
