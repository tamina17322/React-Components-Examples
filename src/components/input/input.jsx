import styles from './input.module.css';

export default function Input({placeholder, onChange}){
    return (
        <input
            className={styles.input}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
}