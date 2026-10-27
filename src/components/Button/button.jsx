import styles from './button.module.css';

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
}) {
  const variantClass = styles[variant] || styles.primary;
  const sizeClass = styles[size] || styles.md;

  return (
    <button
      type={type}
      className={`${styles.button} ${variantClass} ${sizeClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
