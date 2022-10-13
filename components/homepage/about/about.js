import styles from "./about.module.css";
import { FaHtml5, FaCss3Alt, FaReact, FaPython } from "react-icons/fa";
import { SiJavascript, SiTensorflow } from "react-icons/si";



export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.content}>
                <span className={styles.title}>Background</span>
                <span className={styles.subtitle}>I'm a mechatronic engineer and a self-taught programmer. I've had experience on multiple projects related with web development and data science. The technologies I mainly use are the following: </span>
                <div className={styles.techContainer}>
                    <div className={styles.item}>
                        <FaHtml5 className={styles.icon} />
                        <span>HTML</span>
                    </div>
                    <div className={styles.item}>
                        <FaCss3Alt className={styles.icon} />
                        <span>CSS</span>
                    </div>
                    <div className={styles.item}>
                        <SiJavascript className={styles.icon} />
                        <span>Javascript</span>
                    </div>
                    <div className={styles.item}>
                        <FaReact className={styles.icon} />
                        <span>React</span>
                    </div>
                    <div className={styles.item}>
                        <FaPython className={styles.icon} />
                        <span>Python</span>
                    </div>
                    <div className={styles.item}>
                        <SiTensorflow className={styles.icon} />
                        <span>Tensorflow</span>
                    </div>
                </div>
            </div>
        </section>
    )
}