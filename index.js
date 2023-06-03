let card1 = randomCard();
let card2 = randomCard();
let card = [card1 , card2]
let cardsEl = document.getElementById('cards-el')
let sumEl = document.getElementById('sum-el')
let sum = card1 + card2
let message = ''
let messageEl = document.getElementById('message-el')
let blackJack = false;
let isalive = true 


function startGame(){
    
    // cardsEl.textContent = 'Cards:' + card[0] +' '+ card[1]
    cardsEl.textContent = 'Cards:'
    for (let i=0; i < card.length; i++){
       cardsEl.textContent +=  card[i] + ' ' 
    }
    sumEl.textContent = 'Sum:' + sum;
    
    if(sum <=20){
        message = 'Do you want to draw a new card'
    }else if (sum === 21){
        message = 'You have got black jack'
        blackJack = true
    }else{
        message = 'You are out of the game'
        isalive = false
    }
    messageEl.textContent = message
}

function randomCard(){
    let randomNum =  Math.floor(Math.random()*13) + 1
    if(randomNum > 10){
        return 10
    }else if (randomNum === 1){
        return 11
    }else{
        return randomNum
    }
}

function newCard(){
    if(blackJack === false && isalive === true){
     let card3 = randomCard();
    card.push(card3)
    sum += card3
    startGame()   
    }
    
}