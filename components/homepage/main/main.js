import styles from "./main.module.css";
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Main() {

    useEffect(() => {
        Aos.init({
            once: true,
            delay: 0,
        })
    }, []);

    return (
        <section id="home" className={styles.main}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <span className={styles.title}>Hi, my <span className={styles.name}>name</span> is Joseph</span>
                    <span className={styles.subtitle}>I'm a front-end developer</span>
                    <a href="#contact"><button className={styles.button}>CONTACT</button></a>
                </div>
                <div className={styles.right}>
                    <div className={styles.rightContainer}>
                        <span>JB</span>
                    </div>
                </div>
            </div>
        </section>
    )
}