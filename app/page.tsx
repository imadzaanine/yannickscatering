import NavBar from "@/public/components/layout/NavBar";
import HeaderSection from "@/public/components/layout/HeaderSection";
import ScrollTemplate from "@/public/components/layout/scroll";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: "url('/imgi_4_salmon.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10">
        <NavBar />
        <HeaderSection />
        <ScrollTemplate />
      </div>
    </div>
  );
}
