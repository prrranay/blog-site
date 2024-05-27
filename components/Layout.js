import styles from './Layout.module.css';

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Blog App</h1>
            </header>
            <div className={styles.main}>{children}</div>
        </div>
    );
}
