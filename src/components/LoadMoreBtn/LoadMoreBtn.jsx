import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onHandleClick }) => {
  return (
    <button className={css.button} type="button" onClick={onHandleClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
