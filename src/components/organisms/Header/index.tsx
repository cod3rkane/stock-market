import React from 'react'
import Link from 'next/link'

import styles from './styles.module.scss'

function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav>
          <Link href="/">
            <a>
              <i className="icon-bell" />
            </a>
          </Link>
          <Link href="/">
            <a className={styles.userPicture}>
              <span>U</span>
            </a>
          </Link>
          <Link href="/">
            <a>
              <i className="icon-menu" />
            </a>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
