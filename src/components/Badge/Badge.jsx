import styles from './badge.module.css';

export default function Badge({
  children,
  variant = 'neutral',
}) {
  const validVariants = ['neutral', 'success', 'warning', 'error', 'info'];

  const variantClass = validVariants.includes(variant)
    ? styles[variant]
    : styles.neutral;
  return (
    <span className={`${styles.badge} ${variantClass}`}>
      {children}
    </span>
  );
}
