import React, { useState } from 'react'

import PlaylistCollection from './PlaylistCollection';
import SongCollection from './SongCollection';

const App = (props) => {

  const [selectedPlaylistId, setSelectedPlaylistId] = useState(props.data.playlists[0].id)
  const [selectedPlaylistSongIds, setSelectedPlaylistSongIds] = useState(props.data.playlists[selectedPlaylistId - 1].songs)
  const [selectedSongId, setSelectedSongId] = useState(selectedPlaylistSongIds[0])

  return (
    <div className="grid-container app">
      <h1 className="title">React Music Player</h1>
      <div className="grid-x grid-margin-x">
        <PlaylistCollection 
          playlists={props.data.playlists}
          selectedPlaylistId={selectedPlaylistId}
          setSelectedPlaylistId={setSelectedPlaylistId}
          setSelectedPlaylistSongIds={setSelectedPlaylistSongIds}
          setSelectedSongId={setSelectedSongId}
        />
        <SongCollection 
          songs={props.data.songs}
          selectedPlaylistSongIds={selectedPlaylistSongIds}
          selectedSongId={selectedSongId}
          setSelectedSongId={setSelectedSongId}
        />
      </div>
    </div>
  );
}

export default App
