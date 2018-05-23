import React from "react";
import Game from "./game/game";


export const Header = props => {
  const { avatar_url, html_url, login } = props.data;
  return (
    <div className="card">
      <h1 data-testid="userData">Hello <a href={html_url}>{login}!</a></h1>
      <img className="header__avatar" src={avatar_url} />
      <Game />
    </div>
  );
}