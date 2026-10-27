import styles from './input.module.css';

export default function Input({
  id,
  label,
  placeholder,
  helperText,
  error,
  onChange,
  disabled = false,
  value,
  type = 'text',
}) {
  const messageId = `${id}-message`;

  return (
    <div className={styles.field}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        className={styles.input}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={disabled}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={
          error || helperText ? messageId : undefined
        }
      />

      {error ? (
        <p id={messageId} className={styles.error}>
          {error}
        </p>
      ) : helperText ? (
        <p id={messageId} className={styles.helperText}>
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
