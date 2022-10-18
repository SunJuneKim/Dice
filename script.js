const dice = document.querySelector('.dice');
const dice_ = document.querySelector('.dice_');
const rollBtn = document.querySelector('.roll');

const randomDice = () => {
    const random_dice1 = Math.floor(Math.random() * 6)+1;
    const random_dice2 = Math.floor(Math.random() * 6)+1;
    rollDice(random_dice1,random_dice2);
}

const rollDice = (random_dice1, random_dice2) => {
    dice.style.animation = 'rolling_ 4s'; 
    dice_.style.animation = 'rolling 4s';

    setTimeout(() => {
        switch (random_dice1) {
            case 1:
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;
            case 6:
                dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;
            case 2:
                dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;
            case 5:
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;
            case 3:
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;
            case 4:
                dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;
            default:
                break;
        }
        switch (random_dice2) {
            case 1:
                dice_.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;
            case 6:
                dice_.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;
            case 2:
                dice_.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;
            case 5:
                dice_.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;
            case 3:
                dice_.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;
            case 4:
                dice_.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;
            default:
                break;
        }
        dice.style.animation = 'none';
        dice_.style.animation = 'none';
    }, 4050);
}
function buttonChange() {
    text === 'GAME START' ? button.classList.remove('loading') : button.classList.add('loading');
}

// 주사위를 돌리기전에 Up or Down 버튼 선택
document.getElementById('.up').onclick = readyGame();
document.getElementById('.down').onclick = readyGame();

function readyGame(e){
    alert(e.id);
}

rollBtn.addEventListener('click', randomDice);

