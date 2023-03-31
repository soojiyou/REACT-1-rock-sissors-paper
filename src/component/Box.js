import React from 'react'
// 1. create 2 boxs (title(user, computer), picture, game result)
const Box = (props) => {
    console.log("props", props);
    let gameresult;
    if (props.title === "Computer" && props.gameresult !== "tie" && props.gameresult !== "") {
        gameresult = props.gameresult === "win" ? "lose" : "win";
    } else { gameresult = props.gameresult }


    return (
        <div className={`box ${gameresult}`}>
            <h1>{props.title}</h1>
            <img className='item-img' src={props.item && props.item.img} />
            <h2>{gameresult}</h2>
        </div>
    )
}

export default Box