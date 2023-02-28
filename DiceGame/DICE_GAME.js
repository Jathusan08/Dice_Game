'use strict';

let diceNum; // this will create random number between 1 and 6.

let img = document.getElementById('diceIMG'); // this is using the ID tag since we haven't specificed class name that hold the image element.


let Player1Score = 0;
let Player2Score = 0;

let currentScore1 = 0;
let currentScore2 = 0;

let player1Turn = true;
let player2Turn = false;

console.log('player 1 turn');

const diceButton = document.querySelector('.btnRollDice');

const holdButton = document.querySelector('.btnHold');

const resetButton = document.querySelector('.btnRepeat');

const player1Win = function () {

  document.querySelector('.Player_1_Score').textContent = (currentScore1 + Player1Score);
  document.querySelector('.Player_1_Score').textContent = Player1Score;

  document.querySelector('.btnHold').style.display = 'none';
  document.querySelector('.btnRollDice').style.display = 'none';

  document.querySelector('.section_1').style.backgroundColor = 'aqua';
  document.querySelector('.Player_1').style.color = 'black';
  document.querySelector('.Player_1_Score').style.color = 'tomato';
  document.querySelector('.Player1_currentScore').style.backgroundColor = 'tomato';
  document.querySelector('.Player1_currentScore').style.color = 'white';



  document.querySelector('.section_2').style.backgroundColor = '#097e7e';
  document.querySelector('.Player_2').style.color = 'gray';
  document.querySelector('.Player_2_Score').style.color = '#706662';
  document.querySelector('.Player2_currentScore').style.backgroundColor = '#706662';
  document.querySelector('.Player2_currentScore').style.color = 'gray';

  alert('Player 1 WIN!');

}

const player2Win = function () {

  document.querySelector('.Player_2_Score').textContent = (currentScore2 + Player2Score);
  document.querySelector('.Player_2_Score').textContent = Player2Score;

  document.querySelector('.btnHold').style.display = 'none';
  document.querySelector('.btnRollDice').style.display = 'none';

  document.querySelector('.section_1').style.backgroundColor = '#097e7e';
  document.querySelector('.Player_1').style.color = 'gray';
  document.querySelector('.Player_1_Score').style.color = '#706662';
  document.querySelector('.Player1_currentScore').style.backgroundColor = '#706662';
  document.querySelector('.Player1_currentScore').style.color = 'gray';


  document.querySelector('.section_2').style.backgroundColor = 'aqua';
  document.querySelector('.Player_2').style.color = 'black';
  document.querySelector('.Player_2_Score').style.color = 'tomato';
  document.querySelector('.Player2_currentScore').style.backgroundColor = 'tomato';
  document.querySelector('.Player2_currentScore').style.color = 'white';
  alert('Player 2 WIN!');

}

const updateScores = function (score) {

  if (player1Turn) { // this is when player 1 is playing we setting the scores


    if (score === 1) { // this is when the player 1 dice roll number 1 we need to reset the player1Score =0

      Player1Score += currentScore1;
      document.querySelector('.Player_1_Score').textContent = Player1Score;
      document.querySelector('.Player1Score').textContent = 0;
      currentScore1 = 0;

    }

    else { // this is when the player 1 dice roll not equal to number 1 then we need to increment  player1Score what ever the dice number.



      currentScore1 += score;

      if ((currentScore1 + Player1Score) >= 100) {

        player1Win((currentScore1 + Player1Score));
        console.log("TESTING PLAYER 1 WINS ");
      }
      else {


        document.querySelector('.Player1Score').textContent = (currentScore1);
      }


    }


  }

  else if (player2Turn) { // this is when player 2 is playing we setting the scores


    if (score === 1) { // this is when the player 2 dice roll number 1 we need to reset the player2Score =0
      Player2Score += currentScore2;
      document.querySelector('.Player_2_Score').textContent = Player2Score;
      document.querySelector('.Player2Score').textContent = 0;
      currentScore2 = 0;


    }

    else {// this is when the player 2 dice roll not equal to number 1 then we need to increment  player2Score what ever the dice number.

      currentScore2 += score;

      if ((currentScore2 + Player2Score) >= 100) {

        player2Win();
      }

      else {

        document.querySelector('.Player2Score').textContent = (currentScore2);
      }


    }

  }

}

const playerSwitch = function () { // here we chosing player depends on if the dice 1 or holding the button to swtich players.

  if (player1Turn) { // this when player 1 want to switch with player 2 so we make player1 false and then player2 true

    player1Turn = false;
    player2Turn = true;

    console.log('player 2 turn');

    document.querySelector('.section_1').style.backgroundColor = '#097e7e';
    document.querySelector('.Player_1').style.color = 'gray';
    document.querySelector('.Player_1_Score').style.color = '#706662';
    document.querySelector('.Player1_currentScore').style.backgroundColor = '#706662';
    document.querySelector('.Player1_currentScore').style.color = 'gray';




    document.querySelector('.section_2').style.backgroundColor = 'aqua';
    document.querySelector('.Player_2').style.color = 'black';
    document.querySelector('.Player_2_Score').style.color = 'tomato';
    document.querySelector('.Player2_currentScore').style.backgroundColor = 'tomato';
    document.querySelector('.Player2_currentScore').style.color = 'white';

    document.querySelector('.Player_1_Score').textContent = (Player1Score += currentScore1);
    document.querySelector('.Player1Score').textContent = 0;
    currentScore1 = 0;


  }

  else if (player2Turn) {// this when player 2 want to switch with player 1 so we make player2 false and then player1 true

    player1Turn = true;
    player2Turn = false;

    console.log('player 1 turn');



    document.querySelector('.section_1').style.backgroundColor = 'aqua';
    document.querySelector('.Player_1').style.color = 'black';
    document.querySelector('.Player_1_Score').style.color = 'tomato';
    document.querySelector('.Player1_currentScore').style.backgroundColor = 'tomato';
    document.querySelector('.Player1_currentScore').style.color = 'white';



    document.querySelector('.section_2').style.backgroundColor = '#097e7e';
    document.querySelector('.Player_2').style.color = 'gray';
    document.querySelector('.Player_2_Score').style.color = '#706662';
    document.querySelector('.Player2_currentScore').style.backgroundColor = '#706662';
    document.querySelector('.Player2_currentScore').style.color = 'gray';

    document.querySelector('.Player_2_Score').textContent = (Player2Score += currentScore2);
    document.querySelector('.Player2Score').textContent = 0;
    currentScore2 = 0;


  }

}


holdButton.addEventListener('click', playerSwitch); // switching players


resetButton.addEventListener('click', function () { // reset button

  alert('you have restart the game');

  console.log('player 1 turn');

  Player1Score = 0;
  Player2Score = 0;

  currentScore1 = 0;
  currentScore2 = 0;

  player1Turn = true;
  player2Turn = false;

  document.querySelector('.btnHold').style.display = 'block';
  document.querySelector('.btnRollDice').style.display = 'block';

  document.querySelector('.Player_1_Score').textContent = 0;
  document.querySelector('.Player1Score').textContent = 0;

  document.querySelector('.Player_2_Score').textContent = 0;
  document.querySelector('.Player2Score').textContent = 0;

  document.querySelector('.section_1').style.backgroundColor = 'aqua';
  document.querySelector('.Player_1').style.color = 'black';
  document.querySelector('.Player_1_Score').style.color = 'tomato';
  document.querySelector('.Player1_currentScore').style.backgroundColor = 'tomato';
  document.querySelector('.Player1_currentScore').style.color = 'white';

  document.querySelector('.section_2').style.backgroundColor = '#097e7e';
  document.querySelector('.Player_2').style.color = 'gray';
  document.querySelector('.Player_2_Score').style.color = '#706662';
  document.querySelector('.Player2_currentScore').style.backgroundColor = '#706662';
  document.querySelector('.Player2_currentScore').style.color = 'gray';

  img.src = 'playDice.png';


});


const rollDice = function () { // this is our own rolling dice function


  diceNum = Math.floor((Math.random() * 6) + 1);

  switch (diceNum) {

    case 1:

      img.src = 'dice-1.png';  // here we're chaniing the image if the diceNum is 1 so one dot image will show.

      break;


    case 2:

      img.src = 'dice-2.png'; // here we're chaniing the image if the diceNum is 2 so one dot image will show.

      break;


    case 3:

      img.src = 'dice-3.png'; // here we're chaniing the image if the diceNum is 3 so one dot image will show.

      break;


    case 4:

      img.src = 'dice-4.png'; // here we're chaniing the image if the diceNum is 4 so one dot image will show.

      break;


    case 5:

      img.src = 'dice-5.png'; // here we're chaniing the image if the diceNum is 5 so one dot image will show.

      break;


    case 6:

      img.src = 'dice-6.png'; // here we're chaniing the image if the diceNum is 6 so one dot image will show.

      break;

  }

  // UPDATING SCORE

  if (diceNum === 1) {

    updateScores(diceNum);
    playerSwitch();

  }

  else {

    updateScores(diceNum);
  }

}


diceButton.addEventListener('click', rollDice); // rolling dice button, notice that we're passing our own function to 'addEventListener' method. In the second parameter we give the name holds the function in this case we pass "rollDice".


function add1(a) {
  if (a < 0) return 0;
  a += 1
}

console.log(add1(4))