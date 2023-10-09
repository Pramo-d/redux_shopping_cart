import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { fetchApiData,fetchCartData } from "./store/cart-actions";

let isRefresh = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsAvailable);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  
  useEffect(()=>{
    dispatch(fetchCartData())
  },[dispatch]);

  useEffect(() => {
    if(isRefresh){
      isRefresh=false;
      return;
    }
    if(cart.change){
    dispatch(fetchApiData(cart))
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
