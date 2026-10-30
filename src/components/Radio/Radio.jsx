import styles from './radio.module.css';

export default function Radio({
  id,
  name,
  value,
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
}) {
  return (
    <label
      htmlFor={id}
      className={`${styles.radio} ${disabled ? styles.disabled : ''}`}
    >
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        className={styles.input}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
      />

      <span className={styles.control} aria-hidden="true">
        <span className={styles.dot} />
      </span>

      <span className={styles.label}>{label}</span>
    </label>
  );
}
