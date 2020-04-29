import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName =
  | 'zoom-in-top'
  | 'zoom-in-left'
  | 'zoom-in-bottom'
  | 'zoom-in-right'

export type TransitionProps = CSSTransitionProps & {
  /** 动画效果 */
  animation?: AnimationName
  /** 如果children是自定义组件 需要设置为true */
  wrapper?: boolean
}

const Transition: React.FC<TransitionProps> = (props) => {
  const { children, classNames, wrapper, animation, ...restProps } = props
  return (
    <CSSTransition
      classNames={classNames ? classNames : animation}
      {...restProps}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  )
}

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
}

export default Transition
