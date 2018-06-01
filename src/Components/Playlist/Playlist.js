import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);


  }

  handleNameChange(event) {
    this.props.onNamechange(event.target.value);
    console.log(event);
  }



  render(){
    return (
      <div className="Playlist">
        <input value={this.props.playlistName}/>
        <TrackList
          tracks={this.props.playlistTracks}
          onRemove={this.props.removeTrack}
          isRemoval={true}
          onChange={this.props.handleNameChange}
        />
        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    );
  }
}
export default Playlist;
