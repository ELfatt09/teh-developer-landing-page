import { lazy, Suspense } from 'react';
import Navbar from './sections/navbar';
import Footer from './sections/footer';
import Seo from './seo';

const Hero = lazy(() => import('./sections/hero'));
const Services = lazy(() => import('./sections/services'));
const Advantages = lazy(() => import('./sections/advantages'));
const Contact = lazy(() => import('./sections/contact'));

function App() {
  return (
    <div className="App p-0 m-0 bg-background font-sans overflow-x-hidden">
      <Seo />
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <Services />
        <Advantages />
        <Contact />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;

