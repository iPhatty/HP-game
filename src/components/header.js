import React from "react";
import TimeGame from "./timeGame/timeGame";
import WhackAMole from "./whackAMole/whackAMole";


export const Header = props => {
  const { avatar_url, html_url, login } = props.data;
  return (
    <div className="card">
      <h1 data-testid="userData">Hello <a href={html_url}>{login}!</a></h1>
      <TimeGame />
      <br />
      <WhackAMole avatarUrl={avatar_url} />
    </div>
  );
}