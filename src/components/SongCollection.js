import React, { useState } from "react";
import Song from "./Song";

const SongCollection = props => {

    const [selectedSongId, setSelectedSongId] = useState(1)

    console.log(selectedSongId)

    const songComponents = props.songs.map((songObject) => {
        return (
            <Song 
                key={songObject.id}
                song={songObject}
                setSelectedSongId={setSelectedSongId}
                selectedSongId={selectedSongId}
            />
        )
    })

    return (
    <div className="cell small-6">
        <h1>
            Songs
        </h1>
        {songComponents}
    </div>
    )
}

export default SongCollection