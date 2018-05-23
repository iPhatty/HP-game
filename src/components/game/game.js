import React from "react";
import '../../../public/style.css';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      phase: 'start',

    }
  }

  toggle = () => {
    this.setState((prevState) => {
      if (this.state.phase === 'running') {
        clearInterval(this.timer);
        return { phase: 'result' }
      } else if (this.state.phase === 'start') {
        const startTime = Date.now() - this.state.time;
        this.timer = setInterval(() => {
          this.setState({ time: Date.now() - startTime })
        })
        return { phase: 'running' }
      }
    })
  }
  restart = () => {
    this.setState((prevState) => {
      return {
        time: 0,
        phase: 'start'
      }
    })
  }

  render() {
    const { phase, time } = this.state;

    if (phase !== 'result') {
      return (
        <React.Fragment>
          <h3>Try and guess how long 10 seconds is!</h3>
          <button onClick={this.toggle}>{phase === 'start' ? 'Start' : 'Stop'}</button>
        </React.Fragment>
      )
    } else {
      const targetTime = 10;
      const newTime = Math.round(((time / 1000) - targetTime) * 10) / 10;
      let message = '';
      if (newTime == 0) {
        message = 'WOW you got it spot on!'
      } else if (newTime > 0) {
        message = `You went ${newTime} seconds over`
      } else {
        message = `You went ${newTime * -1} seconds under`
      }
      return (
        <React.Fragment>
          <h3>{message}</h3>
          <button onClick={this.restart}>Try again?</button>
        </React.Fragment>
      )

    }

  }
}