import React from "react";
import TimeGame from "../timeGame/timeGame";
import WhackAMole from "../whackAMole/whackAMole";
import "./userCard.css";

export const UserCard = props => {
  const { avatar_url, html_url, login } = props.data;
  return (
    <div>
      <h3 data-testid="userData">Hello <a href={html_url}>{login}!</a></h3>
      <TimeGame />
      <br />
      <WhackAMole avatarUrl={avatar_url} />
    </div>
  );
}