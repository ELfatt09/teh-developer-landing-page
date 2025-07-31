import Hero from './sections/hero';
import Navbar from './sections/navbar';
import Advantages from './sections/advantages';
import Services from './sections/services';
import Contact from './sections/contact';
import Footer from './sections/footer';
import Seo from './seo';

function App() {
  return (
    <div className="App p-0 m-0 bg-background font-sans overflow-x-hidden" >
      <Seo />
      <Navbar />
      <Hero />
      <Services />
      <Advantages />
      <Contact />
      <Footer />
      </div>
  );
}

export default App;
