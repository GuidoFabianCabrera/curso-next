import { Hero } from '@/components/home/Hero/Hero';
import { Description } from '@/components/home/Description';
import { MainProducts } from '@/components/home/MainProducts/MainProducts';

export default function Home() {
  return (
    <main>
      <Hero />
      <Description />
      <MainProducts />
    </main>
  );
}
