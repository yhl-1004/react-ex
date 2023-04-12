import {useSelector, useDispatch} from 'react-redux'
import {Div} from '../components'
import type {AppState} from '../store'
import {useInterval} from '../hooks'

export default function ReduxClock() {
  const today = useSelector<AppState, Date>(state => state.today)
  const dispatch = useDispatch()

  useInterval(() => {
    console.log(new Date(), 'ReduxClock')
    dispatch({type: 'setToday', today: new Date()})
  })

  return (
    <Div className="">
      <Div>ReduxClock</Div>
      <Div>{today.toLocaleTimeString()}</Div>
      <Div>{today.toLocaleDateString()}</Div>
    </Div>
  )
}
