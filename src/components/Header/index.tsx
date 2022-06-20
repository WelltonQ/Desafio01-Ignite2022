import styles from './Header.module.css'

import rocketLogo from '../../assets/img/rocket.svg'

export function Header() {
  return (
    <header className={styles.header}>
        {/* <div className={styles.contentLogo}> */}
            <img src={rocketLogo} alt="Logo" />
            <h1>to<span className={styles.spanLogo}>do</span></h1>
        {/* </div> */}
    </header>
  )
}
