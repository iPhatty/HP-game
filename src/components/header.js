import React from "react";

export const Header = props => {
  console.log(props);
  const { avatar_url, html_url, name, followers, repos_url, login } = props.data;
  return (
    <div className="header">
      <h1><a href={html_url}>{name}</a></h1>
      <img className="header__avatar" src={avatar_url} />
    </div>
  );
}