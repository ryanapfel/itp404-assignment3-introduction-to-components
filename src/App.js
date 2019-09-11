import React from 'react';
import './App.css';
import MemberImage from './MemberImage';
import GitHubRepoCard from './GitHubRepoCard';
import Loading from './Loading';
import { getMembers, getRepos } from './GitHubApi';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      members: [],
      repos: [],
      loading: true
    };
  }
  async componentDidMount() {
    let [members, repos] = await Promise.all([
      getMembers('emberjs'),
      getRepos('emberjs')
    ]);

    this.setState({ members, repos, loading: false });
  }
  render() {
    return (
      <div>
        <p>{this.state.members.length} Members of Ember.js</p>
        <div>
          {this.state.loading ? <Loading /> : this.state.members.map((member) => {
            return <MemberImage member={member} key={member.id} />
          })}
        </div>
        <div>
        {this.state.loading ? <Loading /> : this.state.repos.map((repo) => {
          return <GitHubRepoCard repo={repo} key={repo.id} />
        })}
        </div>
      </div>
    );
  }
}

export default App;
