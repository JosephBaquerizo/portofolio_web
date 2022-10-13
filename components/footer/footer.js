import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <hr />
                    <span className={styles.copy}>Contact: jbaquerizof@gmail.com</span>
                    <span className={styles.copy}>© Joseph Baquerizo 2022. All Rights Reserved</span>
                </div>
            </div>
        </footer>
    )
}