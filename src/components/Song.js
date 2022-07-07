import React from "react";

const Song = props => {

    const songClickCallback = () => {
        props.setSelectedSongId(props.song.id)
    }

    let songClassName = ""
    if (props.selectedSongId === props.song.id){
        songClassName = "selected"
    }

    return (
        <p onClick={songClickCallback} className={songClassName}>
            {props.song.artist} - {props.song.name}
        </p>
    )
}

export default Song