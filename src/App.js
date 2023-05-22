import './App.css';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Contact from './components/Contact/contact-component';
import ShopRoute from './routes/ShopRoute/shop-route.component';
import SignInRoute from './routes/SignInRoute/signIn-route.component';
import Checkout from './components/Checkout/checkout.component';
import Appraisal from './components/Appraisal/appraisal.component';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase/firebase.utils';
import { setCurrentUser } from './store/user/user-actions';
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if (user) {
            createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));
    })

    return unsubscribe;
  }, [])

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
