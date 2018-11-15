import React, { PureComponent } from 'react'
import { FLOCK_STATUS, FEED_TYPES, UNIT } from 'Utils/const'
import { calculateEnergyAll, calculateDiffAll } from 'Utils/util'
import { zipObject } from 'lodash'

class Calculator extends PureComponent {
  constructor(props) {
    super(props)
    const initFeedValue = zipObject(FEED_TYPES, new Array(FEED_TYPES.length).fill(0))
    this.state = {
      energyResult: {},
      diffResult: {},
      flockStatus: FLOCK_STATUS[0],
      ...initFeedValue
    }
    this.generateFeedList = this.generateFeedList.bind(this)
    this.handleFeedInput = this.handleFeedInput.bind(this)
    this.handleFlockChange = this.handleFlockChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleFeedInput(e) {
    const { name, value } = e.target
    const newState = {}
    newState[name] = value
    this.setState(newState)
  }

  handleFlockChange = (e) => {
    const { value } = e.target
    this.setState({ flockStatus: value })
  }

  generateFeedList(feed, index) {
    return (
      <div className="feed" key={`feed_${index}`}>
        <label htmlFor={feed} className="feed-label">
          {feed}:
          <span className="feed-input-wrapper">
            <input
              id={feed}
              name={feed}
              type="number"
              className="feed-input"
              min="0"
              step="0.01"
              value={this.state[feed]}
              onChange={this.handleFeedInput}
            />
            <span className="feed-unit">{UNIT}</span>
          </span>
        </label>
      </div>
    )
  }

  generateStatusList(status, index) {
    return (
      <option value={status} key={`status_${index}`}>{status}</option>
    )
  }

  handleSubmit(e) {
    e.preventDefault()
    const energyResult = calculateEnergyAll(this.state)
    const diffResult = calculateDiffAll(this.state.flockStatus, energyResult)
    this.setState({ energyResult, diffResult })
    return false
  }

  render() {
    return (
      <div className="container" id="calculator">
        <h3 className="text-center"> Calculator</h3>
        <div className="calculator-content">
          <form className="input-form">
            <div>Flock Statue</div>
            <div className="flock-statue-content">
              <label>
                <select value={this.state.flockStatus} onChange={this.handleFlockChange}>
                  {FLOCK_STATUS.map(this.generateStatusList)}
                </select>
              </label>
            </div>
            <div>Feed Supply</div>
            <div className="feed-supply-content">
              {FEED_TYPES.map(this.generateFeedList)}
            </div>
            <button onClick={this.handleSubmit} className="send-data">Send data</button>
          </form>
          <div className="result">
            This is caculated result.
            <p>Coming Soon</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Calculator
