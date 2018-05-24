import React from "react";
import "./mole.css";

export default class Mole extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      status: "Wait...",
    };
  }

  targetTime = Math.floor(Math.random() * 5000) + 1000; // Random number between 1 second & 5 seconds
  timeLimit = 800;

  startGame = () => {
    const { time } = this.state;
    this.setState(() => {
      const startTime = Date.now() - time;
      this.timer = setInterval(() => {
        this.setState({ time: Date.now() - startTime });
        if (
          this.state.time < this.targetTime &&
          this.targetTime < this.state.time + this.timeLimit
        ) {
          this.setState({ status: "HIT ME!" });
        } else {
          this.setState({ status: "Wait..." });
        }
      });
    })
  }
  
  UNSAFE_componentWillMount() {
    this.startGame();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { status } = this.state;
    const { avatarUrl, incFunction, decFunction } = this.props;

      if (status === 'HIT ME!') {
        return (
          <React.Fragment>
            <div className="block">
              <img onClick={incFunction} className="avatar" src={avatarUrl}></img>
            </div>
          </React.Fragment>
        )
      } else {
        return (
          <React.Fragment>
            <div onClick={decFunction} className="block"></div>
          </React.Fragment>
        )
      }

    } 
}
