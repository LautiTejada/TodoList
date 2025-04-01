import styles from './Home.module.css';

export const Home = () => {
    return (
    <div className={styles.navBacklog}>
        <h2 className={styles.titleNav}>BackLog </h2>
        <div className={styles.listSprints}>
            <h3>Lista de Sprints</h3>
        </div>

    </div>
    )
}
