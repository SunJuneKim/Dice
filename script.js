const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.roll');
const dice_ = document.querySelector('.dice_');

const randomDice = () => {
    const random = Math.floor(Math.random() * 10);
    const random_ = Math.floor(Math.random()*10);

    if (random >= 1 && random <= 6 && random_ >=1 && random_ <=6) {
        rollDice(random,random_);
    }
    else {
        randomDice();
    }
}
const rollDice = (random random_) => {
    dice.style.animation = 'rolling 4s';
    dice_.style.animation = 'rolling 4s';

    setTimeout(() => {
        switch (random) {
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
        switch (random_) {
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
    }, 7050);
}

rollBtn.addEventListener('click',randomDice);