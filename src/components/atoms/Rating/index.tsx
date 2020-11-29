import React from 'react'
import classnames from 'classnames'

import styles from './styles.module.scss'

type Props = {
  value: number
}

const StarSVG = ({ isSelected }): JSX.Element => (
  <svg
    className={classnames({ [styles.active]: isSelected })}
    focusable="false"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
  </svg>
)

export function Rating({ value }: Props): JSX.Element {
  const stars = []

  for (let i = 0; i < 5; i++) {
    stars.push(<StarSVG key={i} isSelected={i < value} />)
  }

  return <span className={styles.rating}>{stars}</span>
}

Rating.defaultProps = {
  value: 0,
}

export default Rating
