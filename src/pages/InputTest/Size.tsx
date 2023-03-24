import {Input} from '../../theme/daisyui/Input'

const inputs = [
  {
    size: 'input-lg',
    type: 'input-primary'
  },
  {
    size: 'input-md',
    type: 'input-secondary'
  },
  {
    size: 'input-sm',
    type: 'input-accent'
  },
  {
    size: 'input-xs',
    type: 'input-info'
  },
  {
    size: 'input-xs',
    type: 'input-error'
  }
].map(obj => {
  const inputClassName = [obj.size, obj.type].join(' ')
  return (
    <div>
      <label className="label">{obj.size}</label>
      <Input className={inputClassName} />
    </div>
  )
})

export default function Size() {
  return (
    <section className="mt-4">
      <h2 className="text-3xl font-bold text-center"> Size</h2>
      <div className="flex p-4 mt-4 justify-evenly">{inputs}</div>
    </section>
  )
}
