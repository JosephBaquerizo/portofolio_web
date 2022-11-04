import styles from "./work.module.css";
import cls from "classnames";

export default function Work() {
    return (
        <section id="work" className={styles.work}>
            <div className={styles.content}>
                <span className={styles.title}>Web Development</span>
                <div className={styles.frontendContainer}>
                    <div className={styles.item}>
                        <div className={cls(styles.image, styles.image1)}>
                            <div className={styles.opacity}>
                                <span className={styles.description}>On this project, an API was used to retrieve weather data from the web. Users can enter any latitude or longitude to get climate data related to those coordinates.</span>
                            </div>
                        </div>
                        <div className={styles.bottomItem}>
                            <div className={styles.bottomContainer}>
                                <span className={styles.parameter}>Project</span>
                                <span>Weather Data</span>
                            </div>
                            <div className={styles.bottomContainer}>
                                <span className={styles.parameter}>Link</span>
                                <span><a rel="noreferrer noopener" target="_blank" href="https://graphsv2.vercel.app/">Click here</a></span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={cls(styles.image, styles.image2)}>
                            <div className={styles.opacity}>
                                <span className={styles.description}>Demo of a coffee-based product landing page. This project has background video, parallax effects, linear gradients, fade effects, infinite scroll and responsiveness.</span>
                            </div>
                        </div>
                        <div className={styles.bottomItem}>
                            <div className={styles.bottomContainer}>
                                <span className={styles.parameter}>Project</span>
                                <span>Landing page</span>
                            </div>
                            <div className={styles.bottomContainer}>
                                <span className={styles.parameter}>Link</span>
                                <span><a rel="noreferrer noopener" target="_blank" href="https://coffeev2.vercel.app">Click here</a></span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={cls(styles.image, styles.image3)}>
                            <div className={styles.opacity}>
                                <span className={styles.description}>E-commerce site made with Redux. MongoDB for database, Auth0 for authentication and Vercel for deployment.</span>
                            </div>
                        </div>
                        <div className={styles.bottomItem}>
                            <div className={styles.bottomContainer}>
                                <span className={styles.parameter}>Project</span>
                                <span>E-commerce</span>
                            </div>
                            <div className={styles.bottomContainer}>
                                <span className={styles.parameter}>Link</span>
                                <span><a rel="noreferrer noopener" target="_blank" href="https://ecommerce-mongodb.vercel.app">Click here</a></span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={cls(styles.image, styles.image4)}>
                            <div className={styles.opacity}>
                                <span className={styles.description}>Web app that allows you to search for your favorite pokemon while seeing the rest on an infinite scroll.</span>
                            </div>
                        </div>
                        <div className={styles.bottomItem}>
                            <div className={styles.bottomContainer}>
                                <span className={styles.parameter}>Project</span>
                                <span>Pokemon Data</span>
                            </div>
                            <div className={styles.bottomContainer}>
                                <span className={styles.parameter}>Link</span>
                                <span><a rel="noreferrer noopener" target="_blank" href="https://pc-chi.vercel.app">Click here</a></span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={cls(styles.image, styles.image6)}>
                            <div className={styles.opacity}>
                                <span className={styles.description}>Web app that allows you to search for starwars characters while seeing the rest on an pagination view.</span>
                            </div>
                        </div>
                        <div className={styles.bottomItem}>
                            <div className={styles.bottomContainer}>
                                <span className={styles.parameter}>Project</span>
                                <span>Star Wars Data</span>
                            </div>
                            <div className={styles.bottomContainer}>
                                <span className={styles.parameter}>Link</span>
                                <span><a rel="noreferrer noopener" target="_blank" href="https://starwars-seven-ashen.vercel.app">Click here</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <span className={styles.title}>Data Science</span>
                <div className={styles.dataScienceContainer}>
                    <div className={styles.item}>
                        <div className={cls(styles.image, styles.image5)}>
                            <div className={styles.opacity}>
                                <span className={styles.description}>Q1 work published on the Mathematics journal. The investigation was about the application of Siamese Neural Networks to detect and classify the types of damages that can occur on jacket type wind turbines.</span>
                            </div>
                        </div>
                        <div className={styles.bottomItem}>
                            <div className={styles.bottomContainer}>
                                <span className={styles.parameter}>Publication</span>
                                <span>Damage detection SNN</span>
                            </div>
                            <div className={styles.bottomContainer}>
                                <span className={styles.parameter}>Link</span>
                                <span><a rel="noreferrer noopener" target="_blank" href="https://www.mdpi.com/2227-7390/10/7/1131">Click here</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}