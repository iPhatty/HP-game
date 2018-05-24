import React from "react";
import Mole from "../mole/mole";

export default class WhackAMole extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      phase: "start"
    };
    this.incScore = this.incScore.bind(this);
    this.decScore = this.decScore.bind(this);
}

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
              <Mole avatarUrl={this.props.avatarUrl} incFunction={this.incScore} decFunction={this.decScore} />
              <Mole avatarUrl={this.props.avatarUrl} incFunction={this.incScore} decFunction={this.decScore} />
              <Mole avatarUrl={this.props.avatarUrl} incFunction={this.incScore} decFunction={this.decScore} />
              <p>SCORE: {this.state.score}</p>
            </React.Fragment>
          );
      }
    
  }
}
