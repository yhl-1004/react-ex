import type {FC, DetailedHTMLProps, HTMLAttributes, PropsWithChildren} from 'react'
import {WidthHeight} from './WidthHeight'
import {LeftRightBottom} from './LeftRightTopBottom'

export type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export type DivProps = ReactDivProps &
  PropsWithChildren<WidthHeight> &
  LeftRightBottom & {src?: string}

export const Div: FC<DivProps> = ({
  width,
  height,
  style: _style,
  className: _className,
  left,
  right,
  top,
  bottom,
  src,
  ...props
}) => {
  const style = {
    ..._style,
    width,
    height,
    backgroundImage: src && 'url(' + src + ')',
    left,
    right,
    top,
    bottom,
    ...props
  }
  const className = ['box-sizing', src && 'bg-gray-300', _className].join(' ')
  return <div {...props} style={style} className={className} />
}
