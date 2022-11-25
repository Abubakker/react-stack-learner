import React from "react";


const Bio = (props) => {
    return (
        <div className="bio">
            <h2>{props.name}</h2>
            <h4>{props.designation}</h4>
            <p>{props.description}</p>
        </div>
    )
}
export default Bio;