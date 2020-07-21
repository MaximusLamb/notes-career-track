import React from 'react';
import propTypes from 'prop-types';

const Display = ({ followers, following, html_url, repos }) => (
  <ul>
    <br></br>
    <li>FOLLOWERS: {followers}</li>
    <br></br>
    <li>FOLLOWING: {following}</li>
    <br></br>
    <li>LINK: <a href={html_url}>{html_url}</a></li>
    <br></br>
    <li>REPOS <ul>{repos.map(repo => {
      return (
        <li key={repo.name}>
          <a href={repo.html_url}>{repo.name}</a>
        </li>
      );
    })}
    </ul>
    </li>
  </ul>
);

Display.propTypes = {
  followers: propTypes.number.isRequired,
  following: propTypes.number.isRequired,
  html_url: propTypes.string.isRequired,
  repos: propTypes.arrayOf(propTypes.object).isRequired
};

export default Display;
