import styles from './card.module.css';

export default function Card ({title, description, children}){
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <p>{description}</p>

            {children}

        </div>
    )
}

