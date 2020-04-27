import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Button, { ButtonProps, ButtonType, ButtonSize } from './Button'

const defaultProps = {
  onClick: jest.fn(),
}
const testProps: ButtonProps = {
  btnType: 'primary',
  size: 'lg',
  className: 'klass',
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
}

describe('test button component', () => {
  it('default button', () => {
    const wrapper = render(<Button {...defaultProps}>nice</Button>)
    const element = wrapper.getByText('nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    expect(element.disabled).toBeFalsy()
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it('different props', () => {
    const wrapper = render(<Button {...testProps}>nice</Button>)
    const element = wrapper.getByText('nice')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-primary btn-lg')
  })
  it('link button and href is provided', () => {
    const wrapper = render(
      <Button btnType="link" href="http://www.baidu.com">
        Link
      </Button>
    )
    const element = wrapper.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })
  it('disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})
