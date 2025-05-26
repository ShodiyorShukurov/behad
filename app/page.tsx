'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroPage from '@/components/HeroPage';
import Projects from '@/components/Projects';
import Team from '@/components/Team';


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroPage />
        <Projects />
        <Team />
      </main>

      <Footer />
    </>
  );
}

