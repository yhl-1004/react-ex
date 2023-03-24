import {Input} from '../../theme/daisyui/Input'

const inputs = [
  'input-primary',
  'input-secondary',
  'input-accent',
  'input-info',
  'input-success',
  'input-warning',
  'input-error'
].map(input => (
  <div>
    <label className="label">{input}</label>
    <Input className={input} />
  </div>
))
export default function Color() {
  return (
    <section className="mt-4">
      <h2 className="text-3xl font-bold text-center ">Color</h2>
      <div className="flex flex-col p-4 mt-4">{inputs}</div>
    </section>
  )
}
