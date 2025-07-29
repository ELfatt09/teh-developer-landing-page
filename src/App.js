import Hero from './sections/hero';
import Navbar from './sections/navbar';
import Advantages from './sections/advantages';
import Services from './sections/services';
import './App.css';

function App() {
  return (
    <>
    <div className="App bg-background p-0" >
      <Navbar />
      <Hero />
      <Services />
      <Advantages />
      </div>
     </> 
  );
}

export default App;
