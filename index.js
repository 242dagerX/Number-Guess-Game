const text = document.getElementById("text");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");
const maxnum = 100;
const minnum = 1;

submit.onclick = function(){
  text.textContent = "You have to Generate a Random Number First" ;
}

reset.onclick = function(){
  
  reset.textContent = "New Random Number?";
  text.textContent = "Guess a number between (1-100)!"

  let rndnum = Math.floor((Math.random()*100)+1);
  let attempts = 0;

  submit.onclick = function(){

    attempts++;
    let guess = document.getElementById("input").value;
    guess = Number(guess);

    if(guess === rndnum){
      if(attempts == 1){
        text.textContent = `You Guessed it Right! It took you ${attempts} attempt`;
      }
      else {
        text.textContent = `You Guessed it Right! It took you ${attempts} attempts`;
      }
    }

    else if(isNaN(guess) || guess < minnum || guess > maxnum){
      text.textContent = `Please enter a valid Number`;      
    }

    else if(guess < rndnum){
      text.textContent = `Guess Higher!`;
    }

    else if(guess > rndnum){
      text.textContent = `Guess Lower!`;
    }

    else{
      text.textContent = text.textContent ;
    }

    document.getElementById("input").value = "";

  }

}
