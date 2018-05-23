import React from "react";
import Game from "./game/game";
import GameTwo from "./gameTwo/gameTwo";


export const Header = props => {
  const { avatar_url, html_url, login } = props.data;
  return (
    <div className="card">
      <h1 data-testid="userData">Hello <a href={html_url}>{login}!</a></h1>
      <img className="header__avatar" src={avatar_url} />
      <Game />
      <GameTwo />
    </div>
  );
}