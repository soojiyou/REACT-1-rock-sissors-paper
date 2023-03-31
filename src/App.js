import './App.css';
import Box from "./component/Box"
import rock from "./project1-img/rock.jpg"
import sissors from "./project1-img/sissors.jpg"
import paper from "./project1-img/paper.jpg"
import rsp from "./project1-img/rsp.jpg"
import { useState } from "react";




// 1. create 2 boxs (title(user, computer), picture, game result)
// 2. create 3 bottons below two boxes (rock, sissors, paper)
// 3. user box - show the result with picture of user choice when user click the botton
// 4. computer box - show the random choice result with picture
// 5. with user result and computer result, decide the winner and show the result in each box
// 6. change box border color (winner-green, loser-red, tie-black)
const choice = {
  rock: {
    name: "Rock",
    img: rock,
  },
  sissors: {
    name: "Sissors",
    img: sissors,
  },
  paper: {
    name: "Paper",
    img: paper,
  }
}
function App() {

  let contextControl = null;

  const [mode, setMode] = useState('WELCOME');
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [gameresult, setGameResult] = useState("");

  if (mode === 'WELCOME') {
    contextControl =
      <div>
        <div className="main-container">
          <h1 className='maintitle'>Welcome! Rock! Sissors! Paper!</h1>
          <img className='main-img' src={rsp} />
        </div>
        <div className="container-button">
          <button onClick={() => { showResult("rock"); setMode("PLAY") }}>Rock</button>
          <button onClick={() => { showResult("sissors"); setMode("PLAY") }}>Sissors</button>
          <button onClick={() => { showResult("paper"); setMode("PLAY") }}>Paper</button>
        </div>

      </div>
  } else if (mode === 'PLAY') {
    contextControl =
      <div>
        <div className="game-container">
          <Box title="User" item={userSelect} gameresult={gameresult} />
          <Box title="Computer" item={computerSelect} gameresult={gameresult} />

        </div>
        <div className="container-button">
          <button onClick={() => showResult("rock")}>Rock</button>
          <button onClick={() => showResult("sissors")}>Sissors</button>
          <button onClick={() => showResult("paper")}>Paper</button>
        </div>
      </div>
  }
  const showResult = (userchoice) => {
    setUserSelect(choice[userchoice]);
    let computerchoice = randomChoice();
    setComputerSelect(computerchoice);
    setGameResult(judgement(choice[userchoice], computerchoice));
  };
  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let finalselect = itemArray[randomItem];
    return choice[finalselect];
  }

  const judgement = (user, computer) => {
    if (user.name == computer.name) { return "tie"; }
    else if (user.name = "Rock") return computer.name = "Sissors" ? "win" : "lose";
    else if (user.name = "Sissors") return computer.name = "Paper" ? "win" : "lose";
    else if (user.name = "Paper") return computer.name = "Rock" ? "win" : "lose";
  }

  return (
    <div>
      {contextControl}
    </div>

  );
}

export default App;
