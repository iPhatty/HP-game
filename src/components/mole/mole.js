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

  

  startGame = () => {
   const targetTime = Math.floor(Math.random() * 10000) + 1000; // Random number between 1 second & 10 seconds
   const timeLimit = Math.floor(Math.random() * 1000) + 500; // Random number between 500ms & 1 second
   
    const { time } = this.state;
    this.setState(() => {
      const startTime = Date.now() - time;
      this.timer = setInterval(() => {
        const { time } = this.state;
        this.setState({ time: Date.now() - startTime });
        if (
          time < targetTime &&
          targetTime < time + timeLimit
        ) {
          this.setState({ status: "HIT ME!" });
        } else if (time < targetTime) {
          this.setState({ status: "Wait..." });
        } else {
          this.restart();
        }
      });
    })
  }

  restart = () => {
    clearInterval(this.timer);
    this.setState({
      time: 0,
      status: "Wait...",
    });
    this.startGame();
  }

  componentDidMount() {
    this.startGame();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  onClick = (e) => {
    this.props.incFunction(e);
    this.restart();
 }

  render() {
    const { status } = this.state;
    const { avatarUrl, incFunction, decFunction } = this.props;

    if (status === 'HIT ME!') {
      return (
        <React.Fragment>
          <div className="block">
            <img onClick={this.onClick} className="avatar" src={avatarUrl}></img>
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
