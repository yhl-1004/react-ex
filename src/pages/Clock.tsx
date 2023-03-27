import type {FC} from 'react'
import {Div} from '../components'

export type ClockProps = {
  today: Date
}

const Clock: FC<ClockProps> = ({today}) => {
  return (
    <Div className="flex flex-col items-center justify-center h-screen text-white bg-primary">
      <div className="">{today.toLocaleTimeString()}</div>
      <div className="">{today.toLocaleDateString()}</div>
    </Div>
  )
}

export default Clock
