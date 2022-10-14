window.onload=function(){
    
    var moves=[];
    const winCombos=[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];


    function layout(){
        let board = document.getElementById('board').children;
        for(let n = 0; n < board.length; n++){
            board[n].setAttribute('class','square');
            board[n].innerHTML="";
        }

        for(let i = 0; i < board.length; i++){
            board[i].addEventListener("click", function(e){
                if (board[i].innerHTML==""){
                    if (moves.length == 0 || (moves.length % 2) == 0){
                        e.target.textContent = "O";
                        e.target.classList.add('square', 'O');
                        moves.push("O");
                    }else if ((moves.length % 2) > 0){
                        e.target.textContent = "X";
                        e.target.classList.add('square', 'X');
                        moves.push("X");   
                }
                }
            });
            board[i].addEventListener('mouseover', function(e){
                e.target.className += " hover";
            });
            board[i].addEventListener('mouseout', function(e){
                e.target.classList.remove("hover");
            });
    
        };

    }

    function newGame(){

    }

    function checkWinCombos(){


    }

    layout();
    newGame();
    checkWinCombos();
}