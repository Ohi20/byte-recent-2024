import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import SocialMedia from "./components/SocialMedia";
import Clients from "./components/Clients";
import Head from "next/head";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-r from-slate-900 to-slate-700">
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <div className="container mx-auto px-12 py-20 lg:py-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
        <Clients />
        <SocialMedia />
      </div>
      <Footer />
    </main>
  );
}
