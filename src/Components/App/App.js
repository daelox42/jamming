import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Tracklist from '../TrackList/TrackList';

const playlistName = 'Listen up!';
const playlistTracks = [
       {name:'I', artist:'am', album:'Me', id:123} ,
       {name:'You', artist:'are', album:'You', id:234} ,
       {name:'We', artist:'are', album:'People', id:345} ];
       //{searchResults: [{name:'Wafwaf', artist:'Taiga', album:'Ik blaf', id:1123},
       //{name:'Prrrprrr', artist:'Azrael', album:'Ik ben de baas', id:1234} ,
       //{name:'Miaaauw', artist:'Zsazsa', album:'Miauw', id:1345}],

class App extends React.Component {
  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.state = {
            searchResults: [],
            playlistName: "New Playlist",
            playlistTracks:[]};



  }

  addTrack(track){
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {

    }
  }

  removeTrack(track){
    let newPlayListTracks = this.state.playlistTracks.filter(playlistTracks => playlistTracks.id !== track.id);
    this.setState({playlistTracks: newPlayListTracks});
  }

  updatePlaylistName(newName) {
    this.setState({playlistName: newName});
  }

  savePlaylist(){
    let trackURIs = this.state.playlistTracks.map(track => track.uri);
  }

  search(searchTerm) {
    console.log(searchTerm);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar
                  onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.searchResults} />
            <Playlist
                  playlistName={this.playlistName}
                  playlistTracks={this.playlistTracks}
                  onNamechange={this.updatePlaylistName}
                  onSave={this.savePlaylist}  />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
