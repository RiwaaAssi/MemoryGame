/*
const historyBtn = document.querySelector(".history-button");
const modal =document.querySelector(".my-modal");
historyBtn.addEventListener("click",(e)=>{
    modal.classList.remove('d-none');
});


const closeBtn=document.querySelector(".closeBtn");
closeBtn.addEventListener("click",(e)=>{
    modal.classList.add('d-none');
});
document.addEventListener("DOMContentLoaded", () => {
    const score_player1 = parseInt(localStorage.getItem('score_player1'), 10);
    const score_player2 = parseInt(localStorage.getItem('score_player2'), 10);
    let winner;
    let score;

    function CheckWinner() {
        if (score_player1 > score_player2) {
            winner = 'Player 1';
            score = score_player1;
        } else if (score_player1 < score_player2) {
            winner = 'Player 2';
            score = score_player2;
        } else {
            winner = 'Tie';
            score = 'N/A';
        }
    }

    CheckWinner();

    const win = document.querySelector(".winner h2");
    win.textContent = `The Winner is { ${winner} }`;

    const scoree = document.querySelector(".square-cards h3");
    scoree.textContent = `${score}`;
});
/*----------------------------------------------------------------------------------*/


document.addEventListener("DOMContentLoaded", () => {
    const score_player1 = parseInt(localStorage.getItem('score_player1'));
    const score_player2 = parseInt(localStorage.getItem('score_player2'));
    const historyBtn = document.querySelector(".history-button");
    const modal = document.querySelector(".my-modal");
    const closeBtn = document.querySelector(".closeBtn");

    let winner;
    let score;

    function CheckWinner() {
        if (score_player1 > score_player2) {
            winner = 'Player 1';
            score = score_player1;
        } else if (score_player1 < score_player2) {
            winner = 'Player 2';
            score = score_player2;
        } else {
            winner = 'Tie';
            score = 'N/A';
        }
    }

    CheckWinner();

    const win = document.querySelector(".winner h2");
    win.textContent = `The Winner is { ${winner} }`;

    const scoree = document.querySelector(".square-cards h3");
    scoree.textContent = `${score}`;

    historyBtn.addEventListener("click", (e) => {
        modal.classList.remove('d-none');
        populateHistory();
    });

    closeBtn.addEventListener("click", (e) => {
        modal.classList.add('d-none');
    });

    function populateHistory() {
        const table = document.querySelector(".my-modal table");
        table.querySelectorAll('tr:not(:first-child)').forEach(row => row.remove());

        const gameHistory = JSON.parse(localStorage.getItem('gameHistory'));

        gameHistory.forEach(move => {
            let row = table.insertRow();
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            cell1.innerHTML = move.playerName;
            cell2.innerHTML = move.cardsNumber;
            cell3.innerHTML = move.success;
        });
    }
});
