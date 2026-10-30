import styles from './checkbox.module.css';

export default function Checkbox({
  id,
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
}) {
  return (
    <label
      htmlFor={id}
      className={`${styles.checkbox} ${disabled ? styles.disabled : ''}`}
    >
      <input
        id={id}
        type="checkbox"
        className={styles.input}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
      />

      <span className={styles.control} aria-hidden="true">
        <span className={styles.checkmark}>✓</span>
      </span>

      <span className={styles.label}>{label}</span>
    </label>
  );
}
