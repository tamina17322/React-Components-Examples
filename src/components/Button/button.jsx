import styles from './button.module.css';
export default function Button({ children, onClick }) {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
}