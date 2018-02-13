import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


let defaultStyle = {
  color: "#ffffff"
}

let fakeServerData = {
  user: {
    name: 'Philip',
    playlists: [
      {
        name: 'My favorites',
        songs: [
          {name: 'Beat It', duration: 1236},
          {name: 'Cannelioni Makaroni', duration: 1000},
          {name: 'Rosa Helikopter', duration: 7000}
        ]
      },
      {
        name: 'My favorites',
        songs: [
          {name: 'Beat It', duration: 1236},
          {name: 'Cannelioni Makaroni', duration: 1000},
          {name: 'Rosa Helikopter', duration: 7000}
        ]
      },
      {
        name: 'My favorites',
        songs: [
          {name: 'Beat It', duration: 1236},
          {name: 'Cannelioni Makaroni', duration: 1000},
          {name: 'Rosa Helikopter', duration: 7000}
        ]
      },
      {
        name: 'My favorites',
        songs: [
          {name: 'Beat It', duration: 1236},
          {name: 'Cannelioni Makaroni', duration: 1000},
          {name: 'Rosa Helikopter', duration: 7000}
        ]
      }
    ]
  }
}

class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width: "40%", display: "inline-block"}} className="aggregate">
        <h2>{this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return (
      <div style={{...defaultStyle, width: "40%", display: "inline-block"}} className="aggregate">
        <h2>{Math.round(totalDuration/60)} hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img/>
        <input type="text"/>
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultStyle, display: "inline-block", width: "25%"}}>
        <img />
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {

  constructor() {
    super()
    this.state = {serverData: {}}
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeServerData});
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
          <div>
            <h1 style={defaultStyle}>
              {this.state.serverData.user.name}s playlists
            </h1>
            <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
            <HoursCounter playlists={this.state.serverData.user.playlists}/>
            <Filter/>
            <Playlist/>
            <Playlist/>
            <Playlist/>
            <Playlist/>
          </div> : <h1 style={defaultStyle}>Loading...</h1>
        }
      </div>
    );

  }

}

export default App;
