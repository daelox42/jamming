import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';
import App from '../App/App'



class TrackList extends React.Component {
  constructor(props){
    super(props);





  }

  render(){
    return (
      <div className="TrackList">
        {
        this.props.tracks.map(track => {
          return(
            <div>
          /*  <Track
              track={this.props.name}
              key={track.id}
              onAdd={this.props.onAdd}
              onClick={this.addTrack}

             />*/
             <Track
              key={track.id}
              track={this.props.name}
              onRemove={this.props.onRemove}
              onAdd={this.props.onAdd}
              shouldAdd={this.props.shouldAdd}
              />
            </div>
          )
        })
      }
      </div>
    );
  }
}
export default TrackList;
