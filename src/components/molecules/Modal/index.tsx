import React from 'react'
import classnames from 'classnames'

import { TextButton } from '@/components/atoms'
import styles from './styles.module.scss'

type Props = {
  children?: any
  title?: string
  isOpen?: boolean
  onClose: () => void
}

export function Modal({
  children,
  title,
  isOpen,
  onClose,
}: Props): JSX.Element {
  return (
    <>
      <div className={classnames(styles.modal, { [styles.open]: isOpen })}>
        <div className={styles.header}>
          <h1>{title}</h1>
          <TextButton icon="icon-close" onClick={onClose}>
            {''}
          </TextButton>
        </div>
        <section>{children}</section>
      </div>
      <div
        onClick={onClose}
        className={classnames(styles.backdrop, { [styles.open]: isOpen })}
      />
    </>
  )
}

export default Modal
