import Image from "next/image";
import Header from '@/components/header'
import Hero from '@/components/hero'
import ScienceSection from '@/components/science-section'
import PlatformSection from '@/components/platform-section'
import NewsSection from '@/components/news-section'
import TeamSection from '@/components/team-section'
import CallToAction from '@/components/call-to-action'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] text-white relative overflow-clip">
      <Header />
      <Hero />
      <ScienceSection />
      {/* <PlatformSection />
      <NewsSection />
      <TeamSection /> */}
      <CallToAction />
      <Footer />
    </main>
  );
}
