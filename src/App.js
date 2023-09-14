
import Header from './Components/Head/Header';
import './App.css';
import Home from './Components/Hero/Home';

 
import Features from './Components/Features/Features';
import Update from './Components/Update/Update';

import Footer from './Components/Footer';


import Booking from './Components/Booking/Booking';
import Offerzone from './Components/Offer/Offerzone';
import Cancel from './Components/Cancel/Cancel';
import Details from './Components/Details/Details';
const App = () => {
  

  return (
    <div>
      <Header />
      <Home />
      <Features />
      <Booking/>
      <Offerzone/>
      <Update/>
      <Details/>
      <Cancel/>
      
      <Footer/>
      
          </div>
  );
};

export default App;
