import React from "react";

export default class GameTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      phase: "start",
      status: "Wait...",
      hit: 0,
      miss: 0
    };
  }
  targetTime = Math.floor(Math.random() * 5000) + 1000; // Random number between 1 second & 5 seconds
  timeLimit = 500;
  
  toggle = () => {
    const { phase, time } = this.state;
    this.setState(prevState => {
      if (phase === "running") {
        if (time < this.targetTime && this.targetTime < time + this.timeLimit) {
          return { hit: prevState.hit + 1 };
        } else {
          return { miss: prevState.miss + 1 };
        }
      } else if (phase === "start") {
        const startTime = Date.now() - time;

        this.timer = setInterval(() => {
          this.setState({ time: Date.now() - startTime });
          if (
            this.state.time < this.targetTime &&
            this.targetTime < this.state.time + this.timeLimit
          ) {
            this.setState({ status: "HIT ME!" });
          } else if (this.state.time > this.targetTime + 2000) {
            this.setState({ status: "Game Over...", phase: "result" });
          } else {
            this.setState({ status: "Wait..." });
          }
        });
        return { phase: "running" };
      }
    });
  };
  restart = () => {
    clearInterval(this.timer);
    this.setState(() => {
      return {
        time: 0,
        phase: "start",
        status: "Wait...",
        hit: 0,
        miss: 0
      };
    });
  };

  render() {
    const { phase, hit, miss } = this.state;

    if (phase !== "result") {
      return (
        <React.Fragment>
          <h3>Click the button when it says Hit!</h3>
          <button onClick={this.toggle}>
            {phase === "start" ? "Start" : this.state.status}
          </button>
          <span>Hits: {hit}</span>
          <span>Misses: {miss}</span>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h3>Game Over</h3>
          <p>You got...</p>
          <span>Hits: {hit}</span>
          <span>Misses: {miss}</span>
          <button onClick={this.restart}>Try again?</button>
        </React.Fragment>
      );
    }
  }
}
