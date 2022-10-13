import styles from "./header.module.css";
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Header() {

    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <section className={styles.header}>
            <div className={styles.content}>
                <a href="#home">
                    <div className={styles.logo}>
                        <span>JB</span>
                    </div>
                </a>
                <div className={showSidebar ? styles.navbarAppear : styles.navbar}>
                    <ul>
                        <li>
                            <a href="#about"><span>About</span></a>
                        </li>
                        <li>
                            <a href="#work"><span>Work</span></a>
                        </li>
                        <li>
                            <a href="#contact"><span>Contact</span></a>
                        </li>
                    </ul>
                </div>
                <div className={styles.icon}>
                    {
                        showSidebar
                        ?
                        <AiOutlineClose className={styles.iconSub} onClick={() => setShowSidebar(false)}/>
                        :
                        <AiOutlineMenu className={styles.iconSub} onClick={() => setShowSidebar(true)}/>
                    }
                </div>
            </div>
        </section>
    )
}