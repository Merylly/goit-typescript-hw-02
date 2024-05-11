import { InfinitySpin } from "react-loader-spinner";
import css from "./Loader.module.css";

interface LoaderProps {
  visible?: boolean;
  width?: string;
  color?: string;
  ariaLabel?: string;
}

const Loader: React.FC<LoaderProps> = ({ width = "200", color = "#000" }) => {
  return (
    <div className={css.loader}>
      <InfinitySpin width={width} color={color} />
    </div>
  );
};

export default Loader;
