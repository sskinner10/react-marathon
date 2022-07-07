import React from "react";

const Playlist = ({ name, clickPlaylist, className }) => {
    // const { name, clickPlaylist, className } = props


    return (
        <p onClick={clickPlaylist} className={className}>
            {name}
        </p>
    )
}

export default Playlist