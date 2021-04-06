import classes from "./Modal.module.css";
import Auxiliary from "../../../hoc/Auxiliary";
import Bakdrop from "../Backdrop/Backdrop";

const Modal = (props) => (
  <Auxiliary>
    <Bakdrop show={props.show} clicked={props.modalClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? 1 : 0,
      }}
    >
      {props.children}
    </div>
  </Auxiliary>
);

export default Modal;
