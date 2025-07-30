import Hero from './sections/hero';
import Navbar from './sections/navbar';
import Advantages from './sections/advantages';
import Services from './sections/services';

function App() {
  return (
    <>
    <div className="App bg-background font-sans" >
      <Navbar />
      <Hero />
      <Services />
      <Advantages />
      </div>
     </> 
  );
}

export default App;
