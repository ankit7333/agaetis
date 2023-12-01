import styles from './banner.module.scss'

export default function Banner() {
    return(
        <section className={`${styles.banner}`}>
            <b>Title of a longer featured blog post</b>
            <p>Multiple lines of text that form the lede, informing new readers quickly nd efficiently about what's most intresting in this post's contents</p>
            <a href="#">Continue reading...</a>
        </section>
    )
}