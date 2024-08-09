import styles from "./Loading.module.css";

const Loading = () => {
    return(
        <div className={styles.container}>
            <div className={styles.loader}>
                <span>c</span>
                <span>p</span>
                <span>u</span>
                <p>loading</p>
            </div>
        </div>
    );
}

export default Loading;