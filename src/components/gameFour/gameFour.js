import React from "react";
import GameThree from "../gameThree/gameThree";

export default class GameFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      time: 0,
      phase: "start"
    };
    this.updateScore = this.updateScore.bind(this);
  }

  targetTime = Math.floor(Math.random() * 5000) + 1000; // Random number between 1 second & 5 seconds
  timeLimit = 800;

  updateScore(e) {
    e.preventDefault();
    this.setState(prevState => {
      return { score: prevState.score + 1 };
    });
  }

  setTimer = () => {
    const startTime = Date.now() - this.state.time;
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() - startTime });
    });
  };

  render() {
      if(this.state.phase === 'start'){
          return (
              <React.Fragment>
              <h1>Whack a mole</h1>
              <button onClick={() => this.setState({phase: 'running'})}>Start</button>
              </React.Fragment>
          )
      } else if (this.state.phase === 'running') {
        return (
            <React.Fragment>
              <GameThree avatarUrl={this.props.avatarUrl} scoreFunction={this.updateScore} />
              <GameThree avatarUrl={this.props.avatarUrl} scoreFunction={this.updateScore} />
              <GameThree avatarUrl={this.props.avatarUrl} scoreFunction={this.updateScore} />
              <p>SCORE: {this.state.score}</p>
            </React.Fragment>
          );
      }
    
  }
}
