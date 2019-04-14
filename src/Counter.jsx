import React from 'react'

// const value = 10;

const getColor = value => {
  if (value < 0) return 'red'
  if (value > 0) return 'green'
  return 'black'
}

//color: value > 0 ? 'green' : value < 0 ? "red" : "black"
class Counter extends React.Component {
  // khai bao state
  state = { value: 0, delta: this.props.initialDelta, autoIncrease: this.props.initialAutoIncrease }

  handleAuto = () => {
    this.setState({ autoIncrease: !this.state.autoIncrease }, () => {
      if (this.state.autoIncrease) {
        this.interval = setInterval(() => {
          console.log('updatevalue')
          this.handledeltaValue()
        }, 1000)
      } else {
        clearInterval(this.interval)
      }
    })
  }

  handleIValueChange = delta => {
    const currentValue = this.state.delta
    this.setState({ delta: currentValue + delta })
  }

  handledeltaValue = () => {
    const currentValue = this.state.value
    this.setState({ value: currentValue + this.state.delta })
  }
  handleReset = () => {
    this.setState({ value: 0 })
  }

  componentDidMount = () => {
    console.log('didmount')
    if (this.state.autoIncrease === true) {
      this.interval = setInterval(() => {
        this.handledeltaValue()
      }, 1000)
    }
  }
  render() {
    console.log('render')

    const { value, delta, autoIncrease } = this.state

    return (
      <div>
        <div style={{ fontSize: 20, marginTop: 20, fontWeight: 'bold' }}>{this.props.name}</div>

        <div>
          <div>
            Counter value :<span style={{ color: getColor(value) }}>{value}</span>
          </div>
          <button onClick={() => this.handledeltaValue()}>delta</button>
        </div>
        <div>
          Delta : <span style={{ color: getColor(delta) }}>{delta}</span>
        </div>
        <div>
          <button onClick={() => this.handleIValueChange(1)} id="increase">
            increase
          </button>
          <button onClick={() => this.handleIValueChange(-1)} id="decrease">
            decrease
          </button>
          <button onClick={() => this.handleAuto()} id="autodecrease">
            {autoIncrease === false ? 'Stop' : 'Start'} Auto
          </button>
        </div>
      </div>
    )
  }
  componentWillUnmount = () => {
    console.log('unmount')

    clearInterval(this.interval)
  }
}
export default Counter
