import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";

interface SearchBarProps {
  onHandleSearch: (formData: string) => void;
}

const initialValues = { searchValue: "" };

const SearchBar: React.FC<SearchBarProps> = ({ onHandleSearch }) => {
  const handleSubmit = (
    values: typeof initialValues,
    { setSubmitting }: FormikHelpers<typeof initialValues>
  ) => {
    if (!values.searchValue) {
      toast("This field is empty!");
      return;
    }

    onHandleSearch(values.searchValue);
    setSubmitting(false);
  };

  return (
    <header className={css.header}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.input}
            name="searchValue"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <ErrorMessage
            className={css.error}
            name="searchValue"
            component="span"
          />

          <button className={css.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
