import { cartAction } from "./cart-slice";
import { uiAction } from "./ui-slice";

// getting data from database to habdle refresh page
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-cart-41542-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("fetching data invalid");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(cartAction.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          title: "error",
          status: "Error",
          message: "error occurs to fetch",
        })
      );
    }
  };
};
//for putting data in database thruogh the logic thunk
export const fetchApiData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        title: "pending",
        status: "sending data",
        message: "sending",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://redux-cart-41542-default-rtdb.firebaseio.com/cart.json ",
        {
          method: "PUT",
          body: JSON.stringify(cart),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("api fetch failed !!");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiAction.showNotification({
          title: "success",
          status: "successfully",
          message: "successfully send data !!",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          title: "error",
          status: "Error",
          message: "error occurs to fetch",
        })
      );
    }
  };
};
