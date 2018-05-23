import React from "react";
import { Header } from '../header'
import { getUserData } from "../../utilities/getUserData";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      userData: '',
    }
  }

  updateDom(e) {
    e.preventDefault();
    getUserData(`https://api.github.com/users/${this.state.input}`)
      .then(data => {
        console.log(data);
        this.setState({ userData: data });
      });
  }

  logout = () => {
    this.setState({ userData: '', input: '' });
  }

  render() {
    const { input, userData } = this.state;
    if (this.state.userData === '') {
      return (<section id="section-form" className="card">
        <form onSubmit={this.getUserData}>
          <label htmlFor="username-input">
            Enter your GitHub Username:
            <br />
            <input id="username-input" value={input} onChange={e => this.setState({ input: e.target.value })} />
          </label>
          <br />
          <button type="submit" onClick={e => this.updateDom(e)}>
            Submit
        </button>

        </form>

      </section>)
    }
    return (
      <React.Fragment>
        <div class="card">
          <button onClick={this.logout}>Log Out</button>
        </div>
        {userData && <Header data-testid="userData" data={userData} />}
      </React.Fragment>

    )
  }
}