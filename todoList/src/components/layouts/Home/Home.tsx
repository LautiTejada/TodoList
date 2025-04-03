import { CardSpring } from '../ui/CardSpring/CardSpring';
import styles from './Home.module.css';

export const Home = () => {
    return (
    <div className={styles.navBacklog}>
        <h2 className={styles.titleNav}>BackLog 
        <span className="material-symbols-outlined">
            import_contacts
        </span>
        </h2>
        <div className={styles.listSprints}>
            <h3>
            <span className="material-symbols-outlined">
                lists
            </span>
                Lista de Sprints
            </h3>
            <div>
                <CardSpring/>
            </div>
        </div>

    </div>
    )
}
