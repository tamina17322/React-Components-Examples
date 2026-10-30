import styles from './alert.module.css';

const icons = {
  neutral: '●',
  success: '✓',
  warning: '!',
  error: '×',
  info: 'i',
};

export default function Alert({
  variant = 'neutral',
  title,
  message,
}) {
  const currentVariant = icons[variant] ? variant : 'neutral';

  return (
    <div
      className={`${styles.alert} ${styles[currentVariant]}`}
      role="alert"
    >
      <span className={styles.icon} aria-hidden="true">
        {icons[currentVariant]}
      </span>

      <div className={styles.content}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {message && <p className={styles.message}>{message}</p>}
      </div>
    </div>
  );
}
