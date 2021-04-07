import Auxiliary from "../../hoc/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = (props) => (
  <Auxiliary>
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </Auxiliary>
);

export default Layout;
