import './App.css';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Contact from './components/Contact/contact-component';
import ShopRoute from './routes/ShopRoute/shop-route.component';
import SignInRoute from './routes/SignInRoute/signIn-route.component';
import Checkout from './components/Checkout/checkout.component';
import Appraisal from './components/Appraisal/appraisal.component';
import { Routes, Route } from 'react-router-dom';


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<ShopRoute />} />
        <Route path='appraisal' element={<Appraisal />} />
        <Route path='contact' element={<Contact />} />
        <Route path='sign-in/*' element={<SignInRoute />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
