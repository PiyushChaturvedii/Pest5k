
import './App.css';
import Banner from './pages/Banner';
import Navbar from './pages/Navbar'
import Pest from './pages/Pest';
import Services from './pages/Services';
import Whyus from './pages/Whyus';
import Team from './pages/Team';
import Testimony from './pages/Testimony';
import Cta from './pages/Cta';
import Footer from './pages/Footer';
import WaterMark from 'watermark-component-for-react';


function App() {
  return (
    <div className="App">
      <WaterMark content="Sample">
        
      <Navbar />
      <Banner />
      <Services />
      <Whyus />
      <Pest />
      <Team />
      <Testimony />
      <Cta />
      <Footer/>
      </WaterMark>
    </div>
  );
}

export default App;
