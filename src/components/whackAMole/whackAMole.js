import React from "react";
import Mole from "../mole/mole";

export default class WhackAMole extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      phase: "start",
      time: 0,
    };
    this.incScore = this.incScore.bind(this);
    this.decScore = this.decScore.bind(this);
  }

  setTimer = () => {
    const startTime = Date.now() - this.state.time;
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() - startTime });
    });
  };

  incScore(e) {
    e.preventDefault();
    this.setState(prevState => {
      return { score: prevState.score + 1 };
    });
  }

  decScore(e) {
    e.preventDefault();
    this.setState(prevState => {
      return { score: prevState.score - 1 };
    });
  }

  restart = () => {
    clearInterval(this.timer)
    this.setState(() => {
      return {
        score: 0,
        phase: "start",
        time: 0
      };
    });
  };

  render() {
    if (this.state.phase === "start") {
      return (
        <React.Fragment>
          <h1>Whack a mole</h1>
          <button onClick={() => this.setState({ phase: "running" })}>
            Start
          </button>
        </React.Fragment>
      );
    } else if (this.state.phase === "running") {
      const moleArray = [];
        for (let i = 0; i < 10; i++){
          moleArray.push(<Mole
          avatarUrl={this.props.avatarUrl}
          incFunction={this.incScore}
          decFunction={this.decScore}
          key = {i}
        />)
      }
      return (
        <React.Fragment>
          {moleArray}
          <p>SCORE: {this.state.score}</p>
        </React.Fragment>
      );
    } else if (this.state.phase === "result") {
      return (
        <React.Fragment>
          <button onClick={this.restart}>Play Again</button>
        </React.Fragment>
      );
    }
  }
}
