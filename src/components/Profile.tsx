import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://instagram.fgig4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/124101163_807899836654263_8304786892585236535_n.jpg?_nc_ht=instagram.fgig4-1.fna.fbcdn.net&_nc_ohc=J7nPc8KpKjQAX9Y4lHn&tp=1&oh=c7d0b8a72fd070dfb60a08cb4852ebce&oe=605DA370" alt="Vitoria Fontoura" />
            <div>
                <strong> Vitoria Fontoura </strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}