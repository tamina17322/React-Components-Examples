import styles from './switch.module.css';

export default function Switch({
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
      className={`${styles.switch} ${disabled ? styles.disabled : ''}`}
    >
      <input
        id={id}
        type="checkbox"
        role="switch"
        className={styles.input}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
      />

      <span className={styles.track} aria-hidden="true">
        <span className={styles.thumb} />
      </span>

      <span className={styles.label}>{label}</span>
    </label>
  );
}
