import { lazy, Suspense, useRef } from 'react';
import Navbar from './sections/navbar';
import Seo from './seo';
import { motion } from 'framer-motion';
const Hero = lazy(() => import('./sections/hero'));
const Services = lazy(() => import('./sections/services'));
const Advantages = lazy(() => import('./sections/advantages'));
const Contact = lazy(() => import('./sections/contact'));
const Footer = lazy(() => import('./sections/footer'));
// const Decoration = lazy(() => import("./sections/decoration"))

function App() {
  const constraintsRef = useRef(null);
  return (
    <motion.div ref={constraintsRef} className="App p-0 m-0 bg-background font-sans overflow-x-hidden min-h-screen">
      <Seo />
      <Navbar />
      <Suspense>
        {/* <Decoration ref={constraintsRef} /> */}
        <Hero />
        <Services />
        <Advantages />
        <Contact />
        <Footer />
      </Suspense>
    </motion.div>
  );
}

export default App;

