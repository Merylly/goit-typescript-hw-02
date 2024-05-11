import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onHandleClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onHandleClick }) => {
  return (
    <button className={css.button} type="button" onClick={onHandleClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
