import React, {useState} from "react"

import Playlist from "./Playlist"

 const PlaylistCollection = ({ playlists, setSelectedPlaylistId, selectedPlaylistId, setSelectedPlaylistSongIds, setSelectedSongId }) => {

    const playlistCollectionComponents = playlists.map((playlistObject) => {     
        
        const clickPlaylist = () => {
            setSelectedPlaylistId(playlistObject.id)
            setSelectedPlaylistSongIds(playlistObject.songs)
            setSelectedSongId(playlistObject.songs[0])
        }

        let playlistClassName
        if (playlistObject.id === selectedPlaylistId) {
            playlistClassName = "selected"
        }  

        return (
            <Playlist
                key={playlistObject.id}
                name={playlistObject.name}
                playlistClassName={playlistClassName}
                clickPlaylist={clickPlaylist}
            />
        )
    })

    return(
        <div className="cell small-6">
            <h1>
                Playlists
            </h1>
            <div>
                {playlistCollectionComponents}
            </div>
        </div>
    )
}

export default PlaylistCollection
