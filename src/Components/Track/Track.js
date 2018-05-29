import React from 'react';
import './Track.css';
//import TrackAlbum from "../TrackAlbum/TrackAlbum";

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this)
  }

  addTrack(){
    this.props.onAdd(this.props.track);
  }

  renderAction(){
      if (this.props.isRemoval) {
        return (
          <a
            onClick={this.removeTrack}
            className="Track-action">-</a>
        )
      } else {
        return (
          <a
            onClick={this.addTrack}
            className="Track-action">+</a>
        )
      }
    }


  render(){
    return (
      <div className="Track">
        <div className="Track-information">

        <h3>{this.props.track.name}</h3>
        <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
       //<a className="Track-action" onClick={this.addTrack}>!-- + or - will go here --</a>
      </div>
    );
  }
}
export default Track;
