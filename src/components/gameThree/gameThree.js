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
          console.log('hit')
          this.setState({ status: "HIT ME!" });
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

  UNSAFE_componentWillMount() {
    this.startGame();
  }

  render() {
    const { phase, score, status } = this.state;
    if (phase === "running") {
      if (status === 'HIT ME!') {
        return (
          <React.Fragment>
            <div className="block">
              <img onClick={this.props.scoreFunction} className="avatar" src={this.props.avatarUrl}></img>
            </div>
          </React.Fragment>
        )
      } else {
        return (
          <React.Fragment>
            <div onClick={this.props.scoreFunction} className="block"></div>
          </React.Fragment>
        )
      }

    } 
  }
}
