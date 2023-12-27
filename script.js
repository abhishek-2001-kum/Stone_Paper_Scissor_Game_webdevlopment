let  userScore = 0;
let computerScore = 0;
let drawScore =0;

const  choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara =  document.querySelector("#user-score");
const computerScorePara =  document.querySelector("#computer-score");
const drawScorePara = document.querySelector("#draw-score");

const genCompChoice = () =>{  // it genegrate the computer choice
    const options = ["stone","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

};

const  drawGame = () =>{
    drawScore++;
    drawScorePara.innerText = drawScore;
    //console.log("Game was Draw");
    msg.innerText = "Game Draw!!";
    msg.style.backgroundColor = "blueviolet";
};

const showWinner = (userWin) => {
    if(userWin)  {
        userScore++;
        userScorePara.innerText  = userScore;
        //console.log("you win!");
        msg.innerText = "You Win";
        msg.style.backgroundColor = "green";
    }else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        //console.log("you lose");
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "red";
    }
};

const playGame =(userChoice) => {
    console.log("user choice=",userChoice);
    //generate computer choice
    const computerChoice = genCompChoice();
    console.log("computer choice=",computerChoice);

    if (userChoice === computerChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "stone"){
           userWin = computerChoice === "paper" ? false : true;
        }else if(userChoice==="paper"){
           userWin = computerChoice === "scissors" ? false : true;
        }else {
           userWin = computerChoice === "stone" ? false : true;
        }
        showWinner(userWin);
       }
    
};


choices.forEach((choice) =>{
    //console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});