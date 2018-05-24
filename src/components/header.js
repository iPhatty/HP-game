import React from "react";
import Game from "./game/game";
import GameTwo from "./gameTwo/gameTwo";
import GameThree from "./gameThree/gameThree";


export const Header = props => {
  const { avatar_url, html_url, login } = props.data;
  return (
    <div className="card">
      <h1 data-testid="userData">Hello <a href={html_url}>{login}!</a></h1>
      <Game />
      <br />
      <GameTwo />
      <br />
      <GameThree avatarUrl={avatar_url} />
    </div>
  );
}