import styles from './card.module.css';

function Header({ children }) {
  return <div className={styles.header}>{children}</div>;
}

function Body({ children }) {
  return <div className={styles.body}>{children}</div>;
}

function Footer({ children }) {
  return <div className={styles.footer}>{children}</div>;
}

function Card({ children }) {
  return <div className={styles.card}>{children}</div>;
}

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
