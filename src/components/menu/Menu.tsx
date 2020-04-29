import React, {
  createContext,
  useState,
  FunctionComponentElement,
  FC,
  CSSProperties,
} from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './MenuItem'

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: string) => void

export interface MenuProps {
  /**默认 active 的菜单项的索引值 */
  defaultIndex?: string
  className?: string
  /**菜单类型 横向或者纵向 */
  mode?: MenuMode
  style?: CSSProperties
  /**点击菜单项触发的回掉函数 */
  onSelect?: (selectedIndex: string) => void
  /**设置子菜单的默认打开 只在纵向模式下生效 */
  defaultOpenSubMenus?: string[]
}

interface IMenuContext {
  index: string
  onSelect?: SelectCallback
  mode?: MenuMode
  defaultOpenSubMenus?: string[]
}
// 传递index给child，以便知晓当然active为哪一个
export const MenuContext = createContext<IMenuContext>({ index: '0' })

/**
 * 具有导航功能的菜单。支持横向纵向两种模式，支持下拉菜单。
 * ~~~js
 * import { Menu } from 'chen-ui'
 * ~~~
 */
export const Menu: FC<MenuProps> = (props) => {
  const {
    className,
    defaultIndex,
    mode,
    style,
    onSelect,
    children,
    defaultOpenSubMenus,
  } = props

  const [currActive, setActive] = useState(defaultIndex)

  const classes = classNames('menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  })

  const handleClick = (index: string) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }

  // context的值
  const passedContext: IMenuContext = {
    index: currActive ? currActive : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  }

  // 限制children只能是MenuItem
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, { index: index.toString() })
      } else {
        console.error('warning: Menu的child必须是一个MenuItem或SubMenu')
      }
    })
  }

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: [],
}

export default Menu
