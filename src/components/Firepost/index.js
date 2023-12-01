import styles from './firepost.module.scss'

export default function Firepost() {
    return(
        <section className={`${styles.firepost}`}>
            <Post title={`World`} subTitle={`Featured post`} date={`Nov 12`} content={`This is a wider card with supporting text below as a natural lead-in to additional content.`} />
            <Post  classColor={styles.green} title={`Design`} subTitle={`Post title`} date={`Nov 11`} content={`This is a wider card with supporting text below as a natural lead-in to additional content.`} />
        </section>
    )
}
function Post({
    title,
    subTitle,
    date,
    content,
    classColor={},
}){
    return(
        <div className={`${styles.post}`}>
            <div className={`${styles.post__left}`}>
                <b className={classColor}>{title}</b>
                <h6>{subTitle}</h6>
                <span className={`${styles.date}`}>{date}</span>
                <p>{content}</p>
                <a href="#">Continue reading</a>
            </div>
            <div className={`${styles.post__right}`} />
        </div>
    )
}