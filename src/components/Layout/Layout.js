import Auxiliary from "../../hoc/Auxiliary";

const Layout = (props) => (
  <Auxiliary>
    <div>Toolbar, Sidebar, Backdrop</div>
    <main>{props.children}</main>
  </Auxiliary>
);

export default Layout;
