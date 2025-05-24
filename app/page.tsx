import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroPage from '@/components/HeroPage';
import Team from '@/components/Team';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroPage />

        <Team />
      </main>

      <Footer/>
    </>
  );
}
