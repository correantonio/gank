import Hero from '@/components/layout/Hero';
import Diagnostics from '@/components/layout/Diagnostics';
import Solution from '@/components/layout/Solution';
import Example from '@/components/layout/Example';
import Differential from '@/components/layout/Differential';
import Public from '@/components/layout/Public';
import Ending from '@/components/layout/Ending';

export default function Home() {
  return (
    <main className="text-gank-p">
      <Hero />
      <Diagnostics />
      <Solution />
      <Example />
      <Differential />
      <Public/>
      <Ending />
    </main>
  );
}
