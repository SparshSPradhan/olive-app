import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--olive-bg)", minHeight: "100vh" }}>
      <Navbar />
      <HeroSection />
    </main>
  );
}