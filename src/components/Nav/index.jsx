import styles from './nav.module.scss'

export default function Nav({handleIsNav}) {
    const menus = ['World', 'U.S', 'Technology', 'Design', 'Culture', 'Business', 'Politics', 'Opinion', 'Science', 'Health', 'Style', 'Travel'];
    return(
        <nav className={`${styles.nav} ${handleIsNav ? `${styles.show}` : ''} main__inner`}>
            <ul>
                {menus.map((data) =>{
                    return <li><a href="#">{data}</a></li>
                })}
            </ul>
        </nav>
    )
}