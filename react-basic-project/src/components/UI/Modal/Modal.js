import classes from "./Modal.module.css";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Bakdrop from "../Backdrop/Backdrop";
import { Component } from "react";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  componentDidUpdate() {
    console.log("[Modal.js] Updating");
  }

  render() {
    return (
      <Auxiliary>
        <Bakdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? 1 : 0,
          }}
        >
          {this.props.children}
        </div>
      </Auxiliary>
    );
  }
}

export default Modal;
