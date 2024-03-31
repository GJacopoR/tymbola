import classes from "./loader.module.scss";
import Panariello from "public/assets/Panariello.png";

function Loader() {
  return <img src={Panariello} alt="tombola_panariello_loader" className={classes.panariello} />;
}

export default Loader;
