import styles from "./form.module.css";

export default function Form({ onSubmit, children }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit?.(event);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {children}
    </form>
  );
}
