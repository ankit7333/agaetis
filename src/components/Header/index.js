import {useState} from 'react'
import styles from './header.module.scss'
import Nav from '../Nav'

export default function Header({handleShowClick}) {
    const [isNav, setIsNav] = useState(false);
    const handleNav = () => {
        setIsNav(prev => !prev);
        console.log(isNav);
    }
    return(
        <header>
            <div className={`${styles.header}`}>
                <div className={`${styles.header__inner} main__inner`}>
                    <div className={`${styles.header__left}`}>
                        <button className={`button`}>Subscribe</button>
                    </div>
                    <div className={`${styles.header__middle}`}>
                        <a className={`${styles.logo}`} href="#">Large</a>
                    </div>
                    <div className={`${styles.header__right}`}>
                        <button className={`icon button ${styles.searchicon}`} />
                        <button onClick={handleShowClick} className={`button button__secondary`}>Sign Up</button>
                        <button onClick={handleNav} className={`icon button ${styles.hamburgericon}`} />
                    </div>
                </div>
            </div>
            <Nav handleIsNav={isNav} />
        </header>
    )
}