import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItem = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(
    (item) => <li key={item.id}>{item.name}</li>
  );
  return (
    <Modal>
      <ul className={classes.cartItem}>{cartItem}</ul>
      <div className={classes.total}>
        <span>Total</span>
        <span>35.61</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
