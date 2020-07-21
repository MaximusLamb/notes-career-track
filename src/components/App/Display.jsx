import React from 'react';
import propTypes from 'prop-types';

const Display = ({ username, followers, followings, profile }) => (
  <li>
    {username}
    <br></br>
    {followers}
    <br></br>
    {followings}
    <br></br>
    {profile}
  </li>
);

Display.propTypes = {
  username: propTypes.string.isRequired,
  followers: propTypes.number.isRequired,
  followings: propTypes.number.isRequired,
  profile: propTypes.string.isRequired
};

export default Display;
