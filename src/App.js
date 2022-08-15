import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./common/Header/Header";
import Pages from "./pages/Pages";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
// import { useProductsContext } from './context/products_context'
import Data from "./components/Data";
import Cart from "./common/Cart/Cart";
import Footer from "./common/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Loading from "./components/Loading";
// import Error from "./components/Error";

function App() {
  const { productItems } = Data;
  const [CartItem, setCartItem] = useState([]);

  const [active, setActive] = useState("home");
  const [user, setUser] = useState(null);

  // const navigate = useNavigate();
  // const {
  //   products_loading: loading,
  //   products_error: error,
  //   featured_products: productItems,
  // } = useProductsContext()
  // if (loading) {
  //   return <Loading />
  // }
  // if (error) {
  //   return <Error />
  // }
  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setActive("login");
      // navigate("/auth");
    });
  };

  return (
    <>
      <Router>
        <Header
          CartItem={CartItem}
          setActive={setActive}
          active={active}
          user={user}
          handleLogout={handleLogout}
        />
        <ToastContainer position="top-center" />
        <Switch>
          <Route path="/" exact>
            <Pages productItems={productItems} addToCart={addToCart} />
          </Route>
          <Route path="/cart" exact>
            <Cart
              CartItem={CartItem}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
