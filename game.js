import { verbsMitPrepositions } from './verbs_mit_prepositions.js';

class PrepositionsGame {
    constructor() {
        this.currentLevel = 1;
        this.score = 0;
        this.lives = 3;
        this.currentVerbIndex = 0;
        this.levelVerbs = [];
        this.correctPrepositions = [];
        this.selectedPrepositions = [];
        this.hintTimeout = null;
        this.highScore = localStorage.getItem('prepositionsGameHighScore') || 0;

        this.init();
    }

    init() {
        this.loadLevelVerbs();
        this.displayVerb();
        this.updateUI();
        this.startHintAnimation();
    }

    loadLevelVerbs() {
        this.levelVerbs = verbsMitPrepositions.filter(verb => verb.level === this.currentLevel);
        this.currentVerbIndex = 0;
        this.updateLevelProgress();
    }

    getScoreForLevel(level) {
        return level + 2;
    }

    displayVerb() {
        const verbDisplay = document.getElementById('verb-display');
        const container = document.getElementById('prepositions-container');

        if (this.currentVerbIndex >= this.levelVerbs.length) {
            this.nextLevel();
            return;
        }

        const currentVerb = this.levelVerbs[this.currentVerbIndex];
        verbDisplay.textContent = currentVerb.name;
        this.correctPrepositions = currentVerb.prepositions;
        this.selectedPrepositions = [];

        container.innerHTML = '';

        const allPrepositions = [...new Set(
            verbsMitPrepositions.flatMap(verb => verb.prepositions)
        )];

        allPrepositions.forEach(preposition => {
            const button = document.createElement('button');
            button.className = 'preposition-btn';
            button.textContent = preposition;
            button.onclick = () => this.selectPreposition(preposition, button);
            container.appendChild(button);
        });

        this.startHintAnimation();
    }

    startHintAnimation() {
        if (this.hintTimeout) {
            clearTimeout(this.hintTimeout);
        }

        const buttons = document.querySelectorAll('.preposition-btn');
        buttons.forEach(button => {
            button.classList.remove('hint');
            if (this.correctPrepositions.includes(button.textContent)) {
                button.classList.add('hint');
            }
        });
    }

    selectPreposition(preposition, buttonElement) {
        if (buttonElement.classList.contains('disabled') ||
            buttonElement.classList.contains('correct') ||
            buttonElement.classList.contains('incorrect')) {
            return;
        }

        buttonElement.classList.add('disabled');

        if (this.correctPrepositions.includes(preposition)) {
            buttonElement.classList.add('correct');
            this.selectedPrepositions.push(preposition);

            if (this.selectedPrepositions.length === this.correctPrepositions.length) {
                this.allCorrectSelected();
            }
        } else {
            buttonElement.classList.add('incorrect');
            this.loseLife();
        }
    }

    allCorrectSelected() {
        const points = this.getScoreForLevel(this.currentLevel);
        this.score += points;

        setTimeout(() => {
            this.currentVerbIndex++;
            this.displayVerb();
            this.updateUI();
        }, 1000);
    }

    loseLife() {
        this.lives--;
        this.updateHearts();

        if (this.lives <= 0) {
            this.gameOver();
        }
    }

    updateHearts() {
        const hearts = document.querySelectorAll('.heart');
        hearts.forEach((heart, index) => {
            if (index >= this.lives) {
                heart.classList.add('lost');
            } else {
                heart.classList.remove('lost');
            }
        });
    }

    updateUI() {
        document.getElementById('current-level').textContent = this.currentLevel;
        document.getElementById('score').textContent = this.score;
        this.updateHearts();
        this.updateLevelProgress();
    }

    updateLevelProgress() {
        const completed = this.currentVerbIndex;
        const total = this.levelVerbs.length;

        document.getElementById('verbs-completed').textContent = completed;
        document.getElementById('total-verbs').textContent = total;

        const progressFill = document.getElementById('progress-fill');
        const percentage = total > 0 ? (completed / total) * 100 : 0;
        progressFill.style.width = percentage + '%';
    }

    nextLevel() {
        this.currentLevel++;

        if (this.currentLevel > 8) {
            this.gameComplete();
            return;
        }

        setTimeout(() => {
            this.loadLevelVerbs();
            this.displayVerb();
            this.updateUI();
        }, 1500);
    }

    gameOver() {
        if (this.score > this.highScore) {
            this.highScore = this.score;
            localStorage.setItem('prepositionsGameHighScore', this.highScore);
        }

        const modal = document.getElementById('game-over-modal');
        const title = document.getElementById('game-over-title');
        const message = document.getElementById('game-over-message');
        const finalScore = document.getElementById('final-score');

        title.textContent = 'Game Over';
        message.textContent = 'You lost all your lives!';
        finalScore.textContent = this.score;

        modal.style.display = 'block';
    }

    gameComplete() {
        if (this.score > this.highScore) {
            this.highScore = this.score;
            localStorage.setItem('prepositionsGameHighScore', this.highScore);
        }

        const modal = document.getElementById('game-over-modal');
        const title = document.getElementById('game-over-title');
        const message = document.getElementById('game-over-message');
        const finalScore = document.getElementById('final-score');

        title.textContent = 'Congratulations!';
        message.textContent = 'You completed all levels!';
        finalScore.textContent = this.score;

        modal.style.display = 'block';
    }
}

let game;

function startGame() {
    game = new PrepositionsGame();
}

function restartGame() {
    document.getElementById('game-over-modal').style.display = 'none';
    startGame();
}

window.addEventListener('load', startGame);
window.restartGame = restartGame;