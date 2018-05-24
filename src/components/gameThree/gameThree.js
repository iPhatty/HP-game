import React from "react";
import "./gameThree.css";

export default class GameThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      phase: "start",
      status: "Wait...",
      score: 0,
    };
  }

  targetTime = Math.floor(Math.random() * 5000) + 1000; // Random number between 1 second & 5 seconds
  timeLimit = 800;

  startGame = () => {
    const { time } = this.state;
    this.setState(prevState => {
      const startTime = Date.now() - time;
      this.timer = setInterval(() => {
        this.setState({ time: Date.now() - startTime });
        if (
          this.state.time < this.targetTime &&
          this.targetTime < this.state.time + this.timeLimit
        ) {
          this.setState({ status: "HIT ME!" });
        } else if (this.state.time > this.targetTime + 2000) {
          this.setState({ phase: "result" });
        } else {
          this.setState({ status: "Wait..." });
        }
      });
      return { phase: "running" };
    })
  }
  updateScore(type) {
    return () => {
      this.setState(({ score: prevScore }) => ({
        score: type === "hit" ? prevScore + 1 : prevScore - 1
      }));
    }
  }

  restart = () => {
    clearInterval(this.timer);
    this.setState(() => {
      return {
        time: 0,
        phase: "start",
        status: "Wait...",
        score: 0,
      };
    });
  };

  render() {
    const { phase, score, status } = this.state;

    if (phase === "start") {
      return (
        <React.Fragment>
          <h3>Play whack a mole!</h3>
          <p>Your face is the mole</p>
          <p>You get -1 point if you miss, and 1 point if you hit!</p>
          <button onClick={this.startGame}>Start</button>
        </React.Fragment >
      );
    } else if (phase === "running") {
      if (status === 'HIT ME!') {
        return (
          <React.Fragment>
            <h3>Play whack a mole!</h3>
            <p>Your face is the mole</p>
            <p>You get -1 point if you miss, and 1 point if you hit!</p>
            <div className="block">
              <img onClick={this.updateScore("hit")} className="avatar" src={this.props.avatarUrl}></img>
            </div>

          </React.Fragment>
        )
      } else {
        return (
          <React.Fragment>
            <h3>Play whack a mole!</h3>
            <p>Your face is the mole</p>
            <p>You get -1 point if you miss, and 1 point if you hit!</p>
            <div onClick={this.updateScore("miss")} className="block"></div>
          </React.Fragment>
        )
      }

    } else {
      return (
        <React.Fragment>
          <h3>Play whack a mole!</h3>
          <p>Your face is the mole</p>
          <p>You get -1 point if you miss, and 1 point if you hit!</p>
          <h1>Result! {score}</h1>
          <button onClick={this.restart}>Replay?</button>
        </React.Fragment>
      )
    }
  }
}
