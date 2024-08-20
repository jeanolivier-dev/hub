import "./page.css";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import ClientVideo from "@/components/ClientVideo/ClientVideo";

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <ClientVideo />
    </div>
  );
}
