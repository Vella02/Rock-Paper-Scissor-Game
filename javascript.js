const computerChoices = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
   let computerSelection = computerChoices[Math.floor(Math.random() * 3)];
   return computerSelection;
}

console.log(getComputerChoice());


let playerSelection = prompt('Please enter a choice');
/*let computerSelection = 'scissors';*/


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    
    
    if(playerSelection == 'scissors' && computerSelection == 'paper'){
       return 1;
    } 
    else if(playerSelection == 'rock' && computerSelection == 'scissors'){
        return 1;
    } 
    else if(playerSelection == 'paper' && computerSelection == 'rock'){
        return 1;
    }
    else if(playerSelection == computerSelection){
        return 'Draw';
    }
    else {
        return 0;
    }
    };

/*console.log(playRound(playerSelection, getComputerChoice()));*/


function game(playerSelection){

    let playerScore = 0;
    let computerScore = 0;

    for(i = 0; i < 5; i++){
       let result = playRound(playerSelection,getComputerChoice());
       if(result === 1){
        playerScore++;
       }
       else if(result === 0){
        computerScore++;
       }
    };

    console.log(playerScore, computerScore);

    if(playerScore > computerScore){
        return `You win! the score was ${playerScore} to ${computerScore}`;
    }
    else if(computerScore > playerScore){
        return `You lose! the score was ${playerScore} to ${computerScore}`;
    }
    else {
        return `Draw! the score was ${playerScore} to ${computerScore}`;
    }
};

console.log(game(playerSelection));
