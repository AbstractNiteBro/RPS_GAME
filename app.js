let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        // console.log("choice was clicked",userchoice);
        playGame(userchoice);
    });
});

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Draw";
    msg.style.backgroundColor = "black";
    msg.style.color = "white";
}

const showWinner = (userWin) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = "You win";
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = "You lose"
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
}

const playGame = (userchoice) => {
    console.log("user choice = ", userchoice);
    //generate computer choice 
const compchoice = genCompChoice();
    console.log("computer choice = ", compchoice);

    if(userchoice === compchoice){
        drawGame();
    }
    else {
        let userWin = true;
        if(userchoice === "rock"){
            //scissor/paper
            userWin = compchoice === "paper" ? false : true;
        }
        else if (userchoice === "scissor"){
            //rock/paper
            userWin = compchoice === "rock" ? false : true;
        }
        else{
            //scissor/rock
            userWin = compchoice === "scissor" ? false : true;
        }
        showWinner(userWin);
    }
};