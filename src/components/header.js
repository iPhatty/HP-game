import React from "react";
import Game from "./game/game";
import GameTwo from "./gameTwo/gameTwo";
import GameFour from "./gameFour/gameFour";


export const Header = props => {
  const { avatar_url, html_url, login } = props.data;
  return (
    <div className="card">
      <h1 data-testid="userData">Hello <a href={html_url}>{login}!</a></h1>
      <Game />
      <br />
      <GameTwo />
      <br />
      <GameFour avatarUrl={avatar_url} />
    </div>
  );
}