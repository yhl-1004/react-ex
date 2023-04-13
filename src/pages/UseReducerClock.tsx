import {useSelector, useDispatch} from 'react-redux'
import {Div} from '../components'
import type {AppState} from '../store'
import {useInterval} from '../hooks'
import {useReducer} from 'react'
import {SetTodayAction} from '../store/actions'

export default function UseReducerClock() {
  const [{today}, dispatch] = useReducer(
    (state: AppState, action: SetTodayAction) => {
      switch (action.type) {
        case 'setToday':
          return {...state, today: new Date()}
      }
    },
    {today: new Date()}
  )

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
