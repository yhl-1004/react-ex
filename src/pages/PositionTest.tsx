import {Div, Icon} from '../components'
import * as D from '../data'

const src = D.randomImage(800, 500)

export default function PositionTest() {
  const icons = ['home', 'search', 'settings', 'favorite'].map(name => (
    <Icon key={name} name={name} className="mr-2" />
  ))
  console.log('src=>', src)
  return (
    <Div>
      <title>PositionTest</title>
      <Div className="relative border-2 border-gray500" src={src} height="10rem">
        <Div className="absolute p-2 text-white bg-red-500" left="1rem" top="1rem">
          {icons}
        </Div>
        <Div className="absolute p-2 text-white bg-blue-500" right="1rem" top="1rem">
          {icons}
        </Div>
        <Div className="absolute p-2 text-white bg-pink-500" left="1rem" bottom="1rem">
          {icons}
        </Div>
        <Div className="absolute p-2 text-white bg-yellow-500" right="1rem" bottom="1rem">
          {icons}
        </Div>
      </Div>
    </Div>
  )
}
