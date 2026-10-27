import styles from './text.module.css';

export default function Text({
  children,
  size = 'body',
  weight = 'regular',
  as: Component = 'p',
}) {
  const sizeClass = styles[size] || styles.body;
  const weightClass = styles[weight] || styles.regular;

  return (
    <Component className={`${styles.text} ${sizeClass} ${weightClass}`}>
      {children}
    </Component>
  );
}
