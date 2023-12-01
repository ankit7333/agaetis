import styles from './elsewhere.module.scss'

export default function Elsewhere() {
    const socials = ['GitHub', 'Twitter', 'Facebook'];
    return(
        <div className={`${styles.elsewhere}`}>
           <h5>Elsewhere</h5>
           <ul>
                {
                    socials.map((data, index) => {
                        return <li key={index}><a href="#">{data}</a></li>
                    })
                }
           </ul>
        </div>
    )
}