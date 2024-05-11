import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ onHandleSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = event.target.searchValue.value.toLowerCase().trim();

    if (!formData.length) {
      toast("This field is empty!");
      return;
    }

    onHandleSearch(formData);
    event.currentTarget.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          name="searchValue"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
