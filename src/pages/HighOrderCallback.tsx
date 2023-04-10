import {useMemo, useCallback} from 'react'
import {Button} from '../theme/daisyui'
import * as D from '../data'

export default function HighOrderCallback() {
  const onClick = useCallback((name: string) => () => alert(name + '${name} clicked'), [])
  const buttons = useMemo(
    () =>
      D.makeArray(3)
        .map(D.randomName)
        .map((name, index) => (
          <Button
            key={index}
            onClick={onClick(name)}
            className="normal-case btn-primary btn-wide btn-xs">
            {name}
          </Button>
        )),
    [onclick]
  )

  return (
    <div className="mt-4">
      <div className="flex mt-4 justify-evenly">{buttons}</div>
    </div>
  )
}
