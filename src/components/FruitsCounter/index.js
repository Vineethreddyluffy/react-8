import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count: 0, count1: 0}

  onMango = () => this.setState(prevState => ({count: prevState.count + 1}))

  onBanana = () => this.setState(prevState => ({count1: prevState.count1 + 1}))

  render() {
    const {count} = this.state
    const {count1} = this.state
    return (
      <div className="cont">
        <h1 className="heading">
          Bob ate<span className="span"> {count}</span> mangoes
          <span className="span"> {count1}</span> bananas
        </h1>
        <div className="card-cont">
          <div className="card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="image"
            />
            <button type="button" className="button" onClick={this.onMango}>
              Eat Mango
            </button>
          </div>
          <div className="card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="image"
            />
            <button type="button" className="button" onClick={this.onBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
