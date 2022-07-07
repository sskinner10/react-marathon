import React, { useState } from "react";

import Song from "./Song";

const SongCollection = ({ songs, selectedPlaylistSongIds, selectedSongId, setSelectedSongId}) => {
    
    const songComponents = songs.map((songObject) => {
        
        const songClickCallback = () => {
            setSelectedSongId(songObject.id)
        }

        let songClassName
        if (selectedSongId === songObject.id) {
            songClassName = "selected"
        }
        
        return (
            <Song 
                key={songObject.id}
                name={songObject.name}
                artist={songObject.artist}
                id={songObject.id}
                songClassName={songClassName}
                songClickCallback={songClickCallback}
            />
        )
    })

    const selectedPlaylistSongs = songComponents.map((songComponent) => {
        if (selectedPlaylistSongIds.includes(songComponent.props.id)) {
            return(
                songComponent
            )
        }
    })

    return (
    <div className="cell small-6">
        <h1>
            Songs
        </h1>
        {selectedPlaylistSongs}
    </div>
    )
}

export default SongCollection