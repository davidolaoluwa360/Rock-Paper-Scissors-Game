// import * from '../node_Modules/easytimer.js/easytimer.js';

var gameArray = ["Rock", "Paper", "Scissors"];

var userScoreCounter = 0;

var computerScoreCounter = 0;

var userlabelrock = document.createElement("label");

var userlabelpaper = document.createElement("label");

var userlabelscissors = document.createElement("label");



var complabelrock = document.createElement("label");

var complabelpaper = document.createElement("label");

var complabelscissors = document.createElement("label");


var gamefontclass = ["far fa-hand-rock", "far fa-hand-paper", "far fa-hand-scissors"];

const randomChoice = (arr) =>{
    return arr[Math.floor(Math.random() * arr.length)];
}


const rockgame = () =>{

    userlabelpaper.remove();
    
    userlabelscissors.remove();

    var userchoice = gameArray[0];

    userlabelrock.setAttribute("class", `${gamefontclass[0]}`);
    
    document.querySelector(".scoreboard .userchoosingchoice .Rock").appendChild(userlabelrock);
    
    var compchoice = randomChoice(gameArray);


    if(compchoice === gameArray[0]){

        complabelscissors.remove()
        complabelpaper.remove();

        complabelrock.setAttribute("class", `${gamefontclass[0]}`);


        document.querySelector(".scoreboard .computerchoosingchoice .Rock").appendChild(complabelrock);

        document.querySelector(".boardresult .myresult").style.backgroundColor = "crimson";

        document.querySelector(".scoreboard .myresult").innerHTML = "Draw";

    }else if(compchoice === gameArray[1]){
        complabelrock.remove()
        complabelscissors.remove();

        computerScoreCounter++;

        document.querySelector(".computerscore").innerHTML = `${computerScoreCounter}`;

        complabelpaper.setAttribute("class", `${gamefontclass[1]}`);

        document.querySelector(".scoreboard .computerchoosingchoice .Paper").appendChild(complabelpaper);

        document.querySelector(".boardresult .myresult").style.backgroundColor = "crimson";

        document.querySelector(".scoreboard .myresult").innerHTML = "You Lose!";

    }else if(compchoice === gameArray[2]){

        complabelpaper.remove();
        complabelrock.remove();

        userScoreCounter++;

        document.querySelector(".users-score").innerHTML = `${userScoreCounter}:`;

        complabelscissors.setAttribute("class", `${gamefontclass[2]}`);

        document.querySelector(".scoreboard .computerchoosingchoice .Scissors").appendChild(complabelscissors);

        document.querySelector(".boardresult .myresult").style.backgroundColor = "green";

        document.querySelector(".scoreboard .myresult").innerHTML = "You Win!";

    }else{
        console.log("Invalid input")
    }

}




const papergame = () =>{

    userlabelrock.remove();
    userlabelscissors.remove();

    userlabelpaper.setAttribute("class", `${gamefontclass[1]}`);
    
    document.querySelector(".scoreboard .userchoosingchoice .Paper").appendChild(userlabelpaper);

    var userchoice = gameArray[1];

    var compchoice = randomChoice(gameArray);

    if(compchoice === gameArray[0]){

        complabelpaper.remove();
        complabelscissors.remove();

        userScoreCounter++;

        document.querySelector(".users-score").innerHTML = `${userScoreCounter}:`;

        complabelrock.setAttribute("class", `${gamefontclass[0]}`);

        document.querySelector(".scoreboard .computerchoosingchoice .Rock").appendChild(complabelrock);

        document.querySelector(".boardresult .myresult").style.backgroundColor = "green";

        document.querySelector(".scoreboard .myresult").innerHTML = "You win!";

    }else if(compchoice === gameArray[1]){

        complabelrock.remove();
        complabelscissors.remove();

        complabelpaper.setAttribute("class", `${gamefontclass[1]}`);

        document.querySelector(".scoreboard .computerchoosingchoice .Paper").appendChild(complabelpaper);

        document.querySelector(".boardresult .myresult").style.backgroundColor = "crimson";

        document.querySelector(".scoreboard .myresult").innerHTML = "Draw";

    }else if(compchoice === gameArray[2]){

        complabelrock.remove();
        complabelpaper.remove();

        computerScoreCounter++;

        document.querySelector(".computerscore").innerHTML = `${computerScoreCounter}`;

        complabelscissors.setAttribute("class", `${gamefontclass[2]}`);

        document.querySelector(".scoreboard .computerchoosingchoice .Scissors") .appendChild(complabelscissors);

        document.querySelector(".boardresult .myresult").style.backgroundColor = "crimson";

        document.querySelector(".scoreboard .myresult").innerHTML = "You Lose!";

    }else{
        console.log("Invalid input")
    }
}




const scissorsgame = () =>{

    userlabelrock.remove();
    userlabelpaper.remove();

    userlabelscissors.setAttribute("class", `${gamefontclass[2]}`);

    document.querySelector(".scoreboard .userchoosingchoice .Scissors").appendChild(userlabelscissors);

    var userchoice = gameArray[2];

    var compchoice = randomChoice(gameArray);

    if(compchoice === gameArray[0]){

        complabelscissors.remove();
        complabelpaper.remove();

        computerScoreCounter++;

        document.querySelector(".computerscore").innerHTML = `${computerScoreCounter}`;

        complabelrock.setAttribute("class", `${gamefontclass[0]}`);

        document.querySelector(".scoreboard .computerchoosingchoice .Rock").appendChild(complabelrock);

        document.querySelector(".boardresult .myresult").style.backgroundColor = "crimson";

        document.querySelector(".scoreboard .myresult").innerHTML = "You Lose!";

    }else if(compchoice === gameArray[1]){

        complabelrock.remove();
        complabelscissors.remove();

        userScoreCounter++;

        document.querySelector(".users-score").innerHTML = `${userScoreCounter}:`;

        complabelpaper.setAttribute("class", `${gamefontclass[1]}`);

        document.querySelector(".scoreboard .computerchoosingchoice .Paper").appendChild(complabelpaper);

        document.querySelector(".boardresult .myresult").style.backgroundColor = "green";

        document.querySelector(".scoreboard .myresult").innerHTML = "You Win!";

    }else if(compchoice === gameArray[2]){


        complabelrock.remove();
        complabelpaper.remove();

        complabelscissors.setAttribute("class", `${gamefontclass[2]}`);

        document.querySelector(".scoreboard .computerchoosingchoice .Scissors").appendChild(complabelscissors);

        document.querySelector(".boardresult .myresult").style.backgroundColor = "crimson";

        document.querySelector(".scoreboard .myresult").innerHTML = "Draw";

    }else{
        console.log("Invalid input")
    }

}


//------------------------------------------------------

const resetInstructionModal = () =>{
    document.querySelector(".instruction-modal").style.display = "none";

    timercounter();
}

//---------------------------------------------------------
let startingminutes = 0;
const timercounter = () =>{
    let startingsecs = '00';
    document.querySelector(".timecounter-container .counter .Dcounter .min");
    
    for(let i = 1; i <= 59; i++) {
        setTimeout( function timer(){
            document.querySelector(".timecounter-container .counter .Dcounter .sec1").innerHTML = i;
            if(i === 59){
                startingminutes++;
                document.querySelector(".timecounter-container .counter .Dcounter .sec1").innerHTML = startingsecs;
                document.querySelector(".timecounter-container .counter .Dcounter .min").innerHTML = `${startingminutes}:`;
                document.querySelector(".overallWinnerContainer").style.display = "flex";
                if(userScoreCounter > computerScoreCounter){
                    document.querySelector(".overallWinnerContainer .dashboard header").innerHTML = "YOU WIN";
                }
                else if(userScoreCounter < computerScoreCounter){
                    document.querySelector(".overallWinnerContainer .dashboard header").innerHTML = "YOU LOSE!";             
                }
                else if(userScoreCounter === computerScoreCounter){
                    document.querySelector(".overallWinnerContainer .dashboard header").innerHTML = "DRAW!";
                }else{
                    console.log("Unknown result");
                    console.log("could not display answer");
                }
            }
        }, i*1000);
    }
}

const instruction = () =>{
    document.querySelector(".instruction-modal").style.display = "flex";

    document.querySelector(".startbtn button").innerHTML = "RESUME";
}

const playagain = () =>{
    startingminutes = 0;
    document.querySelector(".timecounter-container .counter .Dcounter .min").innerHTML = `${startingminutes}:`;
    document.querySelector(".overallWinnerContainer").style.display = "none";
    timercounter();
    userScoreCounter = 0;
    document.querySelector(".users-score").innerHTML = `${userScoreCounter}:`;
    computerScoreCounter = 0;
    document.querySelector(".computerscore").innerHTML = `${computerScoreCounter}`;
}
