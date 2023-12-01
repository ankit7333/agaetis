import styles from './about.module.scss'

export default function About() {
    return(
        <div className={`${styles.about}`}>
           <h5>About</h5>
           <p>Etiam porta sem malesuada magna molliseuismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
        </div>
    )
}