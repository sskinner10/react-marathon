import React from "react";

const Playlist = ({ name, clickPlaylist, playlistClassName }) => {

    return (
        <p onClick={clickPlaylist} className={playlistClassName}>
            {name}
        </p>
    )
}

export default Playlist