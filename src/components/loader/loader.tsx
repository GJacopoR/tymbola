import classes from "./loader.module.scss";
import Panariello from "resources/assets/Panariello.png";

function Loader() {
  return <img src={Panariello} alt="tombola_panariello_loader" className={classes.panariello} />;
}

export default Loader;
