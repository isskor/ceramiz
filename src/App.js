import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Collections from './pages/Collections';
// import Dishware from './pages/Dishware';
import ProductPage from './pages/ProductPage';
import ItemPage from './pages/ItemPage';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import { useEffect } from 'react';
import { fetchShop } from './features/appSlice';
import { useDispatch } from 'react-redux';
import OurStory from './pages/OurStory';
import SubscribeBanner from './components/SubscribeBanner';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Receipt from './pages/Receipt';
import MyAccount from './pages/MyAccount';
import ScrollToTop from './components/ScrollToTop';
import SmallNavbar from './components/SmallNavbar';

import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShop());
  }, [dispatch]);

  return (
    <div className='app'>
      <BrowserRouter>
        <ScrollToTop>
          <SmallNavbar />
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/about'>
              <OurStory />
            </Route>
            <Route exact path='/collections'>
              <Collections />
            </Route>
            <Route exact path='/collections/:collection'>
              <ProductPage />
            </Route>
            <Route path='/collections/:collection/:id'>
              <ItemPage />
            </Route>
            <Route path='/cart'>
              <Cart />
            </Route>
            <Route path='/checkout'>
              <Checkout />
            </Route>
            <Route path='/receipt'>
              <Receipt />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path={['/purchases', '/settings']}>
              <MyAccount />
            </Route>
          </Switch>
          <SubscribeBanner />
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
