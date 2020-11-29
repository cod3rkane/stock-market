import React from 'react'

import styles from './styles.module.scss'

type Props = {
  icon: string
  children: any
  onClick: () => void
}

export function TextButton({ icon, children, onClick }: Props): JSX.Element {
  return (
    <button onClick={onClick} className={styles.textButton}>
      <i className={icon} />
      <span>{children}</span>
    </button>
  )
}

export default TextButton
