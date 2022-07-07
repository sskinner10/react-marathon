import React, {useState} from "react"

import Playlist from "./Playlist"

const PlaylistCollection = props => {

    const [chosenPlaylist, setChosenPlaylist] = useState(null)


    const playlistCollectionComponents = props.playlists.map((playlistObject) => {
        
        const clickPlaylist = () => {
            setChosenPlaylist(playlistObject.id)
        }
        let className

        if (playlistObject.id === chosenPlaylist) {
            className = "selected"
        }
        
        return (
            <Playlist
                key={playlistObject.id}
                name={playlistObject.name}
                className={className}
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
