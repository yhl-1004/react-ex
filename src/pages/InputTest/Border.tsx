import {Input} from '../../theme/daisyui/Input'

const inputs = ['input-bordered', 'input-ghost'].map(input => {
  const className = ['bg-white', input].join(' ')
  return (
    <div>
      <label className="label">{input}</label>
      <Input className={className} />
    </div>
  )
})

export default function Border() {
  return (
    <section className="mt4">
      <h2 className="text-3xl font-bold text-center">Border</h2>
      <div className="flex p-4 mt-4 justify-evenly">{inputs}</div>
    </section>
  )
}
