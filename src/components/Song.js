import React from "react";

const Song = ({ name, artist, songClassName, songClickCallback }) => {

    return (
        <p onClick={songClickCallback} className={songClassName}>
            {artist} - {name}
        </p>
    )
}

export default Song