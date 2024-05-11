import css from "./ErrorMessage.module.css";

const ErrorMessage = (
  message = "Oops, something wrong. Please, reload the page."
) => {
  return <p className={css.message}>{message}</p>;
};

export default ErrorMessage;
