import React from "react";

export default class GameTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      phase: "start",
      status: "Wait...",
      hit: 0,
      miss: 0,
    };
  }
  targetTime = 2000;
  toggle = () => {
    this.setState((prevState) => {
      if (this.state.phase === "running") {
        if (
          this.state.time < this.targetTime &&
          this.targetTime < this.state.time + 1000
        ) {
          console.log('hit ',this.state.hit)
          return {hit: prevState.hit + 1}
        } else {
          console.log('miss ',this.state.miss)
          return {miss: prevState.miss + 1}
        }
        // clearInterval(this.timer);
        // return { phase: 'result' }
      } else if (this.state.phase === "start") {
        const startTime = Date.now() - this.state.time;

        this.timer = setInterval(() => {
          this.setState({ time: Date.now() - startTime });
          if (
            this.state.time < this.targetTime &&
            this.targetTime < this.state.time + 1000
          ) {
            this.setState({ status: "HIT ME!" });
          } else {
            this.setState({ status: "Wait..." });
          }
        });
        return { phase: "running" };
      }
    });
  };
  restart = () => {
    this.setState(() => {
      return {
        time: 0,
        phase: "start",
        status: "Wait..."
      };
    });
  };

  render() {
    const { phase, time } = this.state;

    if (phase !== "result") {
      return (
        <React.Fragment>
          <h3>Click the button when it says Hit!</h3>
          <button onClick={this.toggle}>
            {phase === "start" ? "Start" : this.state.status}
          </button>
        </React.Fragment>
      );
    } else {
      const targetTime = 10;
      const newTime = Math.round((time / 1000 - targetTime) * 10) / 10;
      let message = "";
      if (newTime == 0) {
        message = "WOW you got it spot on!";
      } else if (newTime > 0) {
        message = `You went ${newTime} seconds over`;
      } else {
        message = `You went ${newTime * -1} seconds under`;
      }
      return (
        <React.Fragment>
          <h3>{message}</h3>
          <button onClick={this.restart}>Try again?</button>
        </React.Fragment>
      );
    }
  }
}
