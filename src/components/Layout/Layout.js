import Auxiliary from "../../hoc/Auxiliary";
import classes from "./Layout.module.css";

const Layout = (props) => (
  <Auxiliary>
    <div>Toolbar, Sidebar, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Auxiliary>
);

export default Layout;
