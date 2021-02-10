import HomePage from './components/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';
import Shop from "./components/Shop";
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import DetailBlog from './components/DetailBlog';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import {Switch, Route, Redirect} from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/:path" component={ProductDetails} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/wishlist" component={Wishlist} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/:id" component={DetailBlog} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/checkout" component={Checkout} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
