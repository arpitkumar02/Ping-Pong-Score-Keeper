const p1 = {
    score : 0,
    button : document.querySelector('#p1Button'),
    display : document.querySelector('#p1Display')
};
const p2 = {
    score : 0,
    button : document.querySelector('#p2Button'),
    display : document.querySelector('#p2Display')
};

const resetButton = document.querySelector('#reset')
const winningSelect = document.querySelector('#playerto')

let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent){
    if(!isGameOver){
        player.score += 1;
        if (player.score === winningScore){
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled = true;
            opponent.button.disabled = true;
            isGameOver = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function(){
    updateScores(p1, p2)
})

p2.button.addEventListener('click', function(){
    updateScores(p2, p1)
})

winningSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset () {
    isGameOver = false;
    for(let i of [p1,p2]){
        i.score =0;
        i.display.textContent = 0;
        i.display.classList.remove('has-text-success', 'has-text-danger');
        i.button.disabled = false;
    }
}