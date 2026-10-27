import styles from './heading.module.css';

export default function Heading({
  children,
  level = 2,
}) {
  const Tag = `h${level}`;
  const headingClass = styles[`h${level}`] || styles.h2;

  return (
    <Tag className={`${styles.heading} ${headingClass}`}>
      {children}
    </Tag>
  );
}
