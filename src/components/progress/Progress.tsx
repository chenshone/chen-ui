import React, { FC, CSSProperties } from 'react'
import { ThemeProps } from '../icon/Icon'
export interface ProgressProps {
  percent: number
  /** 进度条的高度 */
  strokeHeight?: number
  showText?: boolean
  styles?: CSSProperties
  theme?: ThemeProps
}

const Progress: FC<ProgressProps> = (props) => {
  const { percent, strokeHeight, showText, styles, theme } = props
  return (
    <div className="progress-bar" style={styles}>
      <div
        className="progress-bar-outer"
        style={{ height: `${strokeHeight}px` }}
      >
        <div
          className={`progress-bar-inner color-${theme}`}
          style={{ width: `${percent}%` }}
        >
          {showText && <span className="inner-text">{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  )
}

Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: 'primary',
}
export default Progress
