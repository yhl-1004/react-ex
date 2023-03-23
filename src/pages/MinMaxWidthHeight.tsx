import {Div} from '../components'
import * as D from '../data'

export default function MinMaxTest() {
  return (
    <section>
      <title>MinMaxTest</title>
      <Div className="p-4 bg-gray-300">
        <Div src={D.randomImage(800, 300)} className="bg-cover">
          <Div className="w-1/2 h-80 bg-blue-500" minWidth="10px" maxWidth="100px"></Div>
        </Div>
      </Div>
    </section>
  )
}
