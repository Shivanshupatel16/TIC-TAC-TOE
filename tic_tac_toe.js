let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let img = document.querySelector("#img_button");

let turnO = true; 
let count = 0; 

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetgame = () => {
  turnO = true;
  count = 0;
  enableboxes();
  msg.innerText = "O's turn";
  msg.classList.add("hide");
};

const enableboxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};


const disableboxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, winner is ${winner}`;
  if(winner==="X"){
    msg.style.color="#F9C80E";
  }
  else{
    msg.style.color="#890620";
  }
  msg.hidden = false;
  disableboxes();
};

const gameDraw = () => {
  msg.innerText = "Game was a draw";
  msg.classList.add("hide");
  disableboxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
  return false;
};

const imgbutton=() =>{
  img.addEventListener("click", () => {
   msg.innerText="HOW CAN I HELP YOU";
   msg.style.color="green";
  });
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.disabled) return;
    if (turnO) {
      box.innerText = 'O';
      msg.innerText = "X's turn";
      box.style.color="#890620";
      msg.style.color="#F9C80E";
      turnO = false;
    } else {
      box.innerText = 'X';
      msg.innerText = "O's turn";
      msg.style
      box.style.color="#F9C80E";
      msg.style.color="#890620";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      msg.style.color="#DC0073";
      gameDraw();
    }
  });
});

newGameBtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);


msg.innerText = "O's turn";
