import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <p className={css.message}>
      "Oops, something wrong. Please, reload the page."
    </p>
  );
};

export default ErrorMessage;
