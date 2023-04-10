import {useMemo, useCallback} from 'react'
import {Button} from '../theme/daisyui'
import * as D from '../data'

export default function Callback() {
  const onClick = useCallback(() => alert('button click'), [])

  const buttons = useMemo(
    () =>
      D.makeArray(3)
        .map(D.randomName)
        .map((name, index) => (
          <Button
            key={index}
            onClick={onClick}
            className="normal-case btn btn-primary btn-wide btn-xs">
            {name}
          </Button>
        )),
    [onClick]
  )

  return (
    <div className="mt-4">
      <div className="flex mt-4 justify-evenly">{buttons}</div>
    </div>
  )
}
