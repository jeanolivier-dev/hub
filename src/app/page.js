import "./page.css";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import ClientVideo from "@/components/ClientVideo/ClientVideo";
import Customers from "@/components/Customers/Customers";
import Products from "@/components/Products/Products";

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <ClientVideo />
      <Customers />
      <Products />
    </div>
  );
}
