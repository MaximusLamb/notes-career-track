import React, { Component } from 'react';
import Inputform from './components/App/Inputform';
import Display from './components/App/Display';
import { getUsers } from './services/getUsers';
import { getRepos } from './services/getRepos';

export default class MainContainer extends Component {
  state = {
    username: '',
    followers: '',
    following: '',
    html_url: '',
    repos: []
  }

  handleChange = ({ target }) => {
    this.setState({ username: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const { username } = this.state;
    Promise.all([
      getUsers(username),
      getRepos(username)
    ])
      .then(([{ followers, following, html_url }, repos]) => this.setState({ followers, following, html_url, repos }));
  }

  render() {
    console.log(this.state.repos_url);
    const { username, followers, following, html_url, repos } = this.state;
    return (
      <div>
        <Inputform username={username} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <Display username={username} followers={followers} following={following} html_url={html_url} repos={repos} />
      </div>
    );
  }

}
