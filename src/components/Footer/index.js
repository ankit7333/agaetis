import styles from './footer.module.scss'

export default function Footer() {
    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    return(
        <footer className={`${styles.footer}`}>
            <b>Blog template built for <a href="#">Bootstrap</a> by <a href="mailto:@mdo">@mdo</a></b>
            <p><button onClick={scrollTop} className={`button ${styles.backtotop}`}>Back to top</button></p>
        </footer>
    )
}