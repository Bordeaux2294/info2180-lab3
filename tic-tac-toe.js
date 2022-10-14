window.onload=function(){
    var moves=['', '', '', '', '', '', '', '', ''];
    var check='';
    var current='O';
    const status= document.getElementById('status');
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
                        e.target.textContent = current;
                        e.target.classList.add('square',current);
                        moves[i]=current; 
                        if (current==='X'){
                            current='O'
                        } else{
                            current='X';
                        }
                    }
                    checkWinCombos();
                });
                board[i].addEventListener('mouseover', function(e){
                    e.target.classList.add("hover");
                });
                board[i].addEventListener('mouseout', function(e){
                    e.target.classList.remove("hover");
                });
            };
        

    }

    function newGame(){
        document.querySelector(".btn").addEventListener("click", ()=>{
            let board = document.getElementById('board').children;
            moves=['', '', '', '', '', '', '', '', ''];
            current='X';
            for(let n = 0; n < board.length; n++){
                board[n].setAttribute('class','square');
                board[n].innerHTML="";
            }
            status.innerHTML= 'Move your mouse over a square and click to play an X or an O.'
            status.classList.remove('you-won');
            
        });
    }

    function checkWinCombos(){
        for(let i=0; i<=7; i++){
            const win = winCombos[i];
            const situation1= moves[win[0]];
            const situation2 = moves[win[1]];
            const situation3 = moves[win[2]];
            if (situation1 === null|| situation2 === null|| situation3===null){
                continue;
            }  
            if (situation1!=''&&(situation1=== situation2 && situation2 === situation3)){
                status.innerHTML='Congratulations '+ situation1+' is the winner!';
                status.classList.add('you-won');
                break;
            }     
        }
    }
   
    layout();
    newGame();
    //checkWinCombos();
}