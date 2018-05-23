import React from "react";
import '../../../public/style.css';
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

  render() {
    const { input, userData } = this.state;
    if (this.state.userData === '') {
      return (<section id="section-form">
        <form onSubmit={this.getUserData}>
          <label htmlFor="username-input">
            Enter your GitHub Username:
          <input id="username-input" value={input} onChange={e => this.setState({ input: e.target.value })} />
          </label>
          <button type="submit" onClick={e => this.updateDom(e)}>
            Submit
        </button>

        </form>

      </section>)
    }
    return (
      <div>
        {userData && <Header data-testid="userData" data={userData} />}
        {/* // <div data-testid="userData">{userData.name}</div>} */}
      </div>

    )
  }
}