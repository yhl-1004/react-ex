import * as D from '../data'

export default function AlignTest() {
  const boxes = D.range(0, 5).map(index => {
    return <div key={index} className="bg-black w-4 h-4 m-1"></div>
  })

  const boxesForStretch = D.range(0, 10).map(index => {
    return <div key={index} className="w-4 bg-black h-4 m-1"></div>
  })

  const justifies = [
    'justify-start',
    'justify-center',
    'justify-end',
    'justify-between',
    'justify-around',
    'justify-evenly'
  ].map(justify => (
    <div key={justify} className="mt-4">
      <title>flex flex-row {justify}</title>
      <div className={'flex flex-row ' + justify + ' p2 bg-gray-300 '}>{boxes}</div>
    </div>
  ))

  const items = ['items-start', 'items-center', 'items-end'].map(item => (
    <div key={item} className="p-2 ml-4">
      <title>flex flex-row {item}</title>
      <div className={'flex flex-row ' + item + ' h-20 bg-gray-300'}>{boxes}</div>
    </div>
  ))

  return (
    <section className="mt4 p-4">
      <title style={{color: 'red'}}>AlignTest</title>
      {justifies}
      {items}
      <div className="mt-4 p-4">
        <title style={{color: 'white'}}>flex flex-row items-stretch</title>
        <div className="flex flex-row items-stretch h-20 bg-gray-300">
          {boxesForStretch}
        </div>
      </div>
    </section>
  )
}
