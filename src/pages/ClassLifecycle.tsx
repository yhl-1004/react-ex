import {Component, ReactNode} from 'react'
export default class ClassLifecycle extends Component {
  state = {
    today: new Date(),
    intervalId: null as unknown as NodeJS.Timer
  }

  componentDidMount(): void {
    const duration = 1000
    const intervalID = setInterval(() => this.setState({today: new Date()}), duration)
    this.setState({intervalID})
  }

  componentWillUnmount(): void {
    clearInterval(this.state?.intervalId)
  }

  render(): ReactNode {
    const {today} = this.state
    return (
      <section className="mt-4">
        <div>ClassLifecycle</div>
        <div className="flex flex-col items-center mt-4">
          <p className="font-mono text-3xl">{today.toLocaleTimeString()}</p>
          <p className="font-mono text-3xl">{today.toLocaleDateString()}</p>
        </div>
      </section>
    )
  }
}
